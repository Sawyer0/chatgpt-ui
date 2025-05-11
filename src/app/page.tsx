"use client";
import { useState } from "react";
import ChatWindow from "@/features/chat/components/ChatWindow";
import ChatSidebar from "@/features/chat/components/ChatSidebar";

export default function Home() {
  const [chats, setChats] = useState([
    { id: "1", title: "General" },
    { id: "2", title: "Homework" },
  ]);
  const [selectedChatId, setSelectedChatId] = useState("1");
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleNewChat = () => {
    const newId = (chats.length + 1).toString();
    setChats([...chats, { id: newId, title: `Chat ${newId}` }]);
    setSelectedChatId(newId);
  };

  return (
    <div className="flex h-screen bg-[#f9fafb] dark:bg-[#18181b]">
      {/* Sidebar for desktop */}
      <aside className="hidden md:block w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
        <ChatSidebar
          chats={chats}
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
          onNewChat={handleNewChat}
        />
      </aside>

      {/* Sidebar for mobile (slide-over) */}
      {sideBarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden">
          <aside className="w-64 bg-white dark:bg-gray-900 h-full shadow-lg">
            <ChatSidebar
              chats={chats}
              selectedChatId={selectedChatId}
              onSelectChat={setSelectedChatId}
              onNewChat={handleNewChat}
            />
            <button
              className="absolute top-4 right-4"
              onClick={() => setSideBarOpen(false)}
              aria-label="Close sidebar"
            >
              &times;
            </button>
          </aside>
        </div>
      )}

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <header className="p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center">
          {/* Hamburger menu for mobile */}
          <button
            className="block md:hidden mr-4"
            onClick={() => setSideBarOpen(true)}
            aria-label="Open sidebar"
          >
            <span className="text-2xl">&#9776;</span>
          </button>
          <h1 className="text-blue-600 bg-white p-4">ChatGPT UI</h1>
        </header>

        <main className="flex-1 overflow-hidden">
          <ChatWindow />
        </main>
      </div>
    </div>
  );
}
