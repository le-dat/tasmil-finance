/* eslint-disable @typescript-eslint/no-explicit-any */
import { SwapQuote } from '@/types/chat';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface ChatResponse {
  type: 'message' | 'swap_quote' | 'swap_executed' | 'error';
  message: string;
  intent?: any;
  quote?: SwapQuote;
  txHash?: string;
}

export class ChatService {
  private static async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  static async sendMessage(userId: string, content: string): Promise<ChatResponse> {
    return this.request<ChatResponse>('/chat/message', {
      method: 'POST',
      body: JSON.stringify({ userId, content }),
    });
  }

  static async executeSwap(quote: SwapQuote): Promise<ChatResponse> {
    return this.request<ChatResponse>('/chat/execute-swap', {
      method: 'POST',
      body: JSON.stringify(quote),
    });
  }
}
