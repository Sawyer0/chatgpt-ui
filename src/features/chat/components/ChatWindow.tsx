'use client' 

import { useState } from 'react'


type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWindow() {
  
  const [messages, setMessages] = useState<Message[]>([])
 
  const [input, setInput] = useState('')

 
  const handleSendMessage = () => {
    if (!input.trim()) return 

    
    setMessages([...messages, { role: 'user', content: input }])
    setInput('') 
  }

  return (
    <div className="flex flex-col h-full bg-[#f9fafb] dark:bg-[#18181b]" role="main" aria-live="polite">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-6">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            Start a conversation by typing a message below
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#a7c7e7] flex items-center justify-center">
                    <span className="text-white">AI</span>
                  </div>
                )}
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-[#a7c7e7] text-[#22223b]'
                      : 'bg-[#f7b7a3] text-[#22223b]'
                  }`}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[#f7b7a3] flex items-center justify-center">
                    <span className="text-white">U</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="sticky bottom-0 bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-800" role="form" aria-label="Send a message">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a7c7e7] dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-[#a7c7e7] text-[#22223b] rounded-lg hover:bg-[#8fb3d9] transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
} 