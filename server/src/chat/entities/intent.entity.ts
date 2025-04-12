export enum IntentType {
  UNKNOWN = 'unknown',
  SWAP = 'swap',
  MARKET = 'market',
}

export interface SwapParams {
  fromToken?: string;
  toToken?: string;
  amount?: string;
  chainId?: number;
}

export interface MarketParams {
  token?: string;
  timeframe?: string;
}

export interface DeFiIntent {
  type: IntentType;
  params: SwapParams | MarketParams;
  confidence: number;
  missingFields: string[];
  context: string;
}
