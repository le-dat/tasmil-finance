import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Suggestion {
  text: string;
  icon: LucideIcon;
}

interface ChatSuggestionsProps {
  onSendMessage: (message: string) => void;
  className?: string;
  suggestions: Suggestion[];
}

export const ChatSuggestions = ({
  onSendMessage,
  className,
  suggestions,
}: ChatSuggestionsProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4 p-6", className)}>
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-purple-500" />
        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Start a conversation
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full">
        {suggestions?.map((suggestion, index) => {
          const Icon = suggestion.icon;
          return (
            <button
              key={`${suggestion.text}-${index}`}
              onClick={() => onSendMessage(suggestion.text)}
              className={cn(
                "relative w-full cursor-pointer text-left text-sm bg-card/30 text-white rounded-lg p-6",
                "border border-card transition-all duration-300",
                "hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20",
                "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              )}
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Icon className="w-5 h-5 text-purple-500" />
                </div>
                <span className="relative z-10">{suggestion.text}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
