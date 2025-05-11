"use client";

type MessageInputProps = {
    value: string;
    onChange: (value: string) => void;
    onSend: () => void;
}

export default function MessageInput({ value, onChange, onSend }: MessageInputProps) {
    return (
        <form
        className="flex gap-2"
        onSubmit={(e) => {
            e.preventDefault();
            onSend();
        }}
        role="form"
        aria-label="Send a message"
        >
        <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        placeholder="What would you like to discuss?"
        className="input-base flex-1"
      />
      <button type="submit" className="btn-primary">
        Send
      </button>
      </form>
    )
}
