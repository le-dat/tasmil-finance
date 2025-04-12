import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';
import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/shared/services/logger.service';
import { clearResponse } from 'src/shared/utils/function';
import {
  DeFiIntent,
  IntentType,
  MarketParams,
  SwapParams,
} from '../entities/intent.entity';
import { MarketIntentService } from './market.intent';
import { SwapIntentService } from './swap.intent';

@Injectable()
export class IntentService {
  private model: ChatOpenAI;
  private readonly logger: LoggerService;
  private marketIntentService: MarketIntentService;
  private swapIntentService: SwapIntentService;

  constructor() {
    this.logger = new LoggerService('IntentService');
    this.initializeModel();
    this.marketIntentService = new MarketIntentService();
    this.swapIntentService = new SwapIntentService();
  }

  private initializeModel(): void {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not defined');
    }

    this.model = new ChatOpenAI({
      openAIApiKey: apiKey,
      modelName: 'gpt-4-turbo-preview',
      temperature: 0,
    });
    this.logger.log('Intent model initialized');
  }

  async extractIntent(message: string): Promise<DeFiIntent> {
    try {
      const response = await this.model.invoke([
        new SystemMessage(
          `You are a DeFi intent parser. Extract the user's intent and parameters from their message.
           Analyze both the current message and previous context to determine missing fields.
           Return a JSON object with the following structure:
           {
             "type": "unknown" | "swap" | "market",
             "params": {
               // For swap intent:
               "fromToken": string (optional),
               "toToken": string (optional),
               "amount": string (optional),
               "chainId": number (optional),
               
               // For market intent:
               "token": string (optional),
               "timeframe": string (optional),
             },
             "confidence": number (0-1),
             "missingFields": string[],
             "context": string (brief explanation of what was understood and what's missing)
           }
           
           For swap intent: fromToken, toToken, amount, and chainId are required.
           For market intent: token, timeframe, and chainId are required.
           Include missing required fields in the missingFields array.
           Use previous messages context to fill in missing fields when possible.
           
           Examples:
           "swap 1 ETH for BTC" -> swap intent with fromToken=ETH, toToken=BTC, amount=1
           "show me ETH market 1h" -> market intent with token=ETH, timeframe=1h`,
        ),
        new HumanMessage(message),
      ]);

      const cleanContent = clearResponse(response.content as string);
      const intent = JSON.parse(cleanContent) as DeFiIntent;

      switch (intent.type) {
        case IntentType.SWAP:
          intent.missingFields = this.swapIntentService.validateSwapIntent(
            intent.params as SwapParams,
          );
          break;
        case IntentType.MARKET:
          intent.missingFields = this.marketIntentService.validateMarketIntent(
            intent.params as MarketParams,
          );
          break;
        default:
          intent.missingFields = [];
      }

      this.logger.log(`Extracted intent: ${JSON.stringify(intent)}`);
      return intent;
    } catch (error) {
      this.logger.error('Failed to extract intent', error);
      throw error;
    }
  }
}
