import { Injectable } from '@nestjs/common';
import { API_CONFIG } from 'src/shared/config/api.config';
import { CoinGeckoResponse } from '../entities/market.entity';

@Injectable()
export class MarketService {
  private readonly apiUrl: string = API_CONFIG.coinketgo.apiUrl;
  private readonly apiKey: string = API_CONFIG.coinketgo.apiKey;

  constructor() {}

  private getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'x-cg-demo-api-key': this.apiKey,
    };
  }

  async getTokenInfo(tokenName: string): Promise<CoinGeckoResponse> {
    try {
      const response = await fetch(
        `${this.apiUrl}/coins/${tokenName}/?localization=false&tickers=false&community_data=false&developer_data=false`,
        {
          method: 'GET',
          headers: this.getHeaders(),
        },
      );

      if (!response.ok) {
        throw new Error(`CoinGecko API error: ${response.statusText}`);
      }

      return response.json() as Promise<CoinGeckoResponse>;
    } catch (error) {
      throw new Error('Failed to fetch token info from CoinGecko', {
        cause: error,
      });
    }
  }

  async fetchTokenList(): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/coins/list`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`CoinGecko API error: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to fetch token info from CoinGecko', {
        cause: error,
      });
    }
  }

  async getMarketData(tokenId: string, days: number): Promise<any> {
    try {
      const response = await fetch(
        `${this.apiUrl}/coins/${tokenId}/market_chart?vs_currency=usd&days=${days}`,
        {
          method: 'GET',
          headers: this.getHeaders(),
        },
      );

      if (!response.ok) {
        throw new Error(`CoinGecko API error: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to fetch market data from CoinGecko', {
        cause: error,
      });
    }
  }
}
