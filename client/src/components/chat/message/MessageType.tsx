import { Message } from '@/types/chat';
import { BotChat } from './BotChat';
import { SwapBoxMessage } from './SwapBoxMessage';
import { UserChat } from './UserChat';

interface MessageTypeProps {
  message: Message;
  isLoading?: boolean;
  onSwapConfirm?: (messageId: string) => Promise<void>;
  onSwapCancel?: (messageId: string) => void;
}

export const MessageType = ({
  message,
  isLoading,
  onSwapConfirm,
  onSwapCancel,
}: MessageTypeProps) => {
  switch (message.type) {
    case 'user':
      return <UserChat message={message} isLoading={isLoading} />;
    case 'bot':
      return <BotChat message={message} isLoading={isLoading} />;
    case 'swap_quote':
      if (!onSwapConfirm || !onSwapCancel) return null;
      return (
        <SwapBoxMessage
          key={message.id}
          message={message}
          onConfirm={() => onSwapConfirm(message.id)}
          onCancel={() => onSwapCancel(message.id)}
          isLoading={isLoading}
        />
      );
    default:
      return null;
  }
};
