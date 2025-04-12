import { Body, Controller, Post } from '@nestjs/common';
import { ChainId, normalizeChainName } from 'src/shared/utils/token-address';
import { getTxHash } from 'src/shared/utils/tx-hash';
import { ChatService } from './chat.service';
import {
  ChatMessage,
  ChatResponse,
  ChatResponseType,
  MessageHistoryEntry,
} from './entities/chat.entity';
import {
  DeFiIntent,
  IntentType,
  MarketParams,
  SwapParams,
} from './entities/intent.entity';
import { ParamsField, SwapQuote } from './entities/swap.entity';
import { IntentService } from './intent';
import { MarketIntentService } from './intent/market.intent';
import { MarketService } from './services/market.service';
import { SwapService } from './services/swap.service';

@Controller('chat')
export class ChatController {
  private messageHistory: Map<string, MessageHistoryEntry[]> = new Map();

  constructor(
    private readonly intentService: IntentService,
    private readonly swapService: SwapService,
    private readonly chatService: ChatService,
    private readonly marketService: MarketService,
    private readonly marketIntentService: MarketIntentService,
  ) {}

  private getRecentMessages(userId: string, limit: number = 3): string {
    const userMessages = this.messageHistory.get(userId) || [];
    const recentMessages = userMessages
      .slice(-limit)
      .map((entry) => entry.content)
      .join('\n');
    return recentMessages;
  }

  private updateMessageHistory(userId: string, content: string): void {
    const userMessages = this.messageHistory.get(userId) || [];
    userMessages.push({
      content,
      timestamp: Date.now(),
    });
    // Keep only last 10 messages
    if (userMessages.length > 10) {
      userMessages.shift();
    }
    this.messageHistory.set(userId, userMessages);
  }

  private isSwapIntent(
    intent: DeFiIntent,
  ): intent is DeFiIntent & { params: SwapParams } {
    return intent.type === IntentType.SWAP;
  }

  private isMarketIntent(
    intent: DeFiIntent,
  ): intent is DeFiIntent & { params: MarketParams } {
    return intent.type === IntentType.MARKET;
  }

  private async handleSwapIntent(
    intent: DeFiIntent & { params: SwapParams },
  ): Promise<ChatResponse> {
    if (intent.missingFields.length > 0) {
      const missingField = intent.missingFields[0] as ParamsField;
      const response = this.swapService.getMissingParameterPrompt(missingField);
      return {
        type: ChatResponseType.BOT,
        message: `${intent.context ? intent.context + '\n' : ''}${response}`,
        intent,
      };
    }

    const quote = await this.swapService.getSwapQuote({
      fromToken: intent.params.fromToken!,
      toToken: intent.params.toToken!,
      amount: intent.params.amount ? parseFloat(intent.params.amount) : 1,
      chainId: intent.params.chainId ?? ChainId.ETHEREUM,
    });

    return {
      type: ChatResponseType.SWAP_QUOTE,
      message: `I found a swap route for you:
      Input: ${quote.amountIn} ${intent.params.fromToken}
      Output: ${quote.amountOut} ${intent.params.toToken}
      Gas Price: ${quote.gasPrice}
      Would you like to proceed with the swap?`,
      quote,
      intent,
    };
  }

  private async handleMarketIntent(
    intent: DeFiIntent & { params: MarketParams },
  ): Promise<ChatResponse> {
    if (intent.missingFields.length > 0) {
      return {
        type: ChatResponseType.BOT,
        message: `I need more information about the market data you're looking for. ${intent.context}`,
        intent,
      };
    }

    const formatToken =
      normalizeChainName(intent.params.token as string) || 'bitcoin';

    const quote = await this.marketService.getTokenInfo(formatToken);
    const analysisIntent = await this.marketIntentService.analysisIntent(quote);

    return {
      type: ChatResponseType.BOT,
      message: `Here's the market data for ${intent.params.token} over ${intent.params.timeframe} timeframe.
       ${analysisIntent}`,
      intent,
    };
  }

  @Post('message')
  async sendMessage(@Body() chatMessage: ChatMessage): Promise<ChatResponse> {
    try {
      this.updateMessageHistory(chatMessage.userId, chatMessage.content);

      const recentContext = this.getRecentMessages(chatMessage.userId);

      // Extract intent from message with context
      const intent = await this.intentService.extractIntent(
        `Previous messages:\n${recentContext}\n\nCurrent message: ${chatMessage.content}`,
      );

      if (!intent) {
        return {
          type: ChatResponseType.BOT,
          message: "I couldn't understand your request. Please try again.",
          intent: undefined,
        };
      }
      // Handle different intent types
      if (this.isSwapIntent(intent)) {
        return this.handleSwapIntent(intent);
      }

      if (this.isMarketIntent(intent)) {
        return this.handleMarketIntent(intent);
      }

      // Handle unknown or other intent types with general AI
      const response = await this.chatService.processMessage(
        chatMessage.content,
        intent.context || '',
        [],
      );

      return {
        type: ChatResponseType.BOT,
        message: response,
        intent,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      return {
        type: ChatResponseType.ERROR,
        message: `Sorry, I encountered an error: ${errorMessage}`,
      };
    }
  }

  @Post('execute-swap')
  async executeSwap(@Body() quote: SwapQuote): Promise<ChatResponse> {
    try {
      const txHash = await this.swapService.executeSwap(quote);
      return {
        type: ChatResponseType.SWAP_EXECUTED,
        message: `Great! Your swap has been executed. You can track the transaction here: ${getTxHash(txHash, quote.chainId)}`,
        txHash,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      return {
        type: ChatResponseType.ERROR,
        message: `Sorry, I couldn't execute the swap: ${errorMessage}`,
      };
    }
  }
}
