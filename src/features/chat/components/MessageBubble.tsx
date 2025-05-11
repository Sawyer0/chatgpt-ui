"use client";

type MessageBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

const MessageBubble = ({ role, content }: MessageBubbleProps) => {
  return (
    <div>
      {role === "user" ? (
        <div
          className="flex items-center gap-2 justify-end"
          role="group"
          aria-label="User message"
        >
          <div className="bubble-user">{content}</div>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 justify-start"
          role="group"
          aria-label="Assistant message"
        >
          <div className="bubble-assistant">{content}</div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
