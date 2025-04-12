import { DeFiIntent } from './intent.entity';
import { SwapQuote } from './swap.entity';
export interface ChatMessage {
  userId: string;
  content: string;
}

export enum ChatResponseType {
  BOT = 'bot',
  SWAP_QUOTE = 'swap_quote',
  MARKET_ANALYSIS = 'market_analysis',
  SWAP_EXECUTED = 'swap_executed',
  ERROR = 'error',
}

export interface ChatResponse {
  type: ChatResponseType;
  message: string;
  intent?: DeFiIntent;
  quote?: SwapQuote;
  txHash?: string;
}

export interface MessageHistoryEntry {
  content: string;
  timestamp: number;
}
