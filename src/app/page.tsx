import ChatWindow from "@/features/chat/components/ChatWindow";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#f9fafb] dark:bg-[#18181b]">
      {/* Sidebar - will be implemented later */}
      <aside className="hidden md:block w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
        {/* Sidebar content will go here */}
      </aside>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <header className="p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <h1 className="text-blue-600 bg-white p-4">ChatGPT UI</h1>
        </header>

        <main className="flex-1 overflow-hidden">
          <ChatWindow />
        </main>
      </div>
    </div>
  );
}
