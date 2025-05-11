"use client";

type MessageBubbleProps = {
  role: "user" | "assistant";
  content: string;
  avatar?: string;
};

const MessageBubble = ({ role, content, avatar }: MessageBubbleProps) => {
  return (
    <div>
      {role === "user" ? (
        <div
          className="flex items-center gap-2 justify-end"
          role="group"
          aria-label="User message"
        >
          <div className="bubble-user" >{content}</div>
          <div className="avatar-user">{avatar || "U"}</div>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 justify-start"
          role="group"
          aria-label="Assistant message"
        >
          <div className="avatar-assistant">{avatar || "A"}</div>
          <div className="bubble-assistant">{content}</div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
