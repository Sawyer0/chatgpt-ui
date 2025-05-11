"use client";

import { useState } from "react";
import MessageBubble from "@/features/chat/components/MessageBubble";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: "This is a fake assistant reply!" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-app" role="main" aria-live="polite">
      <div className="flex-1 overflow-y-auto p-6">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            Start a conversation by typing a message below
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <MessageBubble
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}
          </div>
        )}
      </div>

      <div
        className="sticky bottom-0 bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-800"
        role="form"
        aria-label="Send a message"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="input-base flex-1"
          />
          <button onClick={handleSendMessage} className="btn-primary">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
