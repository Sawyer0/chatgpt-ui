"use client";

type Chat = {
  id: string;
  title: string;
};

type ChatSidebarProps = {
  chats: Chat[];
  selectedChatId: string;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
};

export default function ChatSidebar({
  chats,
  selectedChatId,
  onSelectChat,
  onNewChat,
}: ChatSidebarProps) {
  return (
    <aside className="w-64 h-screen bg-purple-900 text-gray-100 flex flex-col border-r border-purple-900">
      {/* Profile section */}
      <div className="flex flex-wrap mt-8 px-4">
        <div className="w-1/2">
          <img
            src="https://randomuser.me/api/portraits/women/27.jpg"
            className="mx-auto w-20 h-20 rounded-full"
            alt="Profile"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <span className="font-semibold text-white">{/*User Name Dynamically rendered here*/} </span>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
            Premium
          </button>
        </div>
      </div>
      {/* Navigation section */}
      <nav className="mt-10 mb-4 flex-1 overflow-y-auto">
        <ul className="ml-4">
          {chats.map((chat) => (
            <li key={chat.id}>
              <button
                onClick={() => onSelectChat(chat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg mb-2 transition-colors ${
                  selectedChatId === chat.id
                    ? "bg-blue-100 text-blue-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-selected={selectedChatId === chat.id}
                role="button"
              >
                <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">
                  {chat.title[0]}
                </span>
                <span className="truncate">{chat.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
