# ChatGPT UI MVP

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=fff&style=flat-square)
![OpenAI API](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=fff&style=flat-square)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 🚀 Project Overview

**ChatGPT UI MVP** is a modern, beautiful, and user-friendly web interface for interacting with the OpenAI ChatGPT API. The goal is to deliver a robust MVP (Minimum Viable Product) that enables seamless, real-time conversations with an LLM (Large Language Model) via a clean and intuitive UI.

---

## ✨ Features

- **Conversational Chat UI:** Real-time, conversational interface for sending and receiving messages.
- **Modern Design:** Clean, responsive, and accessible layout with smooth interactions.
- **Message Streaming:** Display responses from the LLM as they arrive (if supported by API).
- **Error Handling:** User-friendly error messages and loading states.
- **Session Management:** Maintain chat history within a session.
- **Accessibility:** Keyboard navigation and screen reader support.
- **Dark/Light Mode:** Toggle between themes for user comfort.
- **Mobile Friendly:** Fully responsive for all device sizes.

---

## 🛠️ Tech Stack

- **Next.js (App Router):** React-based UI, SSR/SSG, routing
- **Tailwind CSS v4:** Utility-first, modern CSS
- **Zustand:** Scalable, simple global/local state management
- **React Query:** Async data fetching, caching, and server state management
- **Prisma:** Type-safe, modern ORM for database access
- **PostgreSQL:** Scalable, relational database with support for joins
- **NextAuth/Supabase:** Authentication and future extensibility

---

## 🗂️ Project Structure

```
app/
  layout.tsx         # Root layout
  page.tsx           # Main chat page
  features/
    chat/
      components/    # Chat UI components (ChatWindow, Message, InputBox, etc.)
      hooks/         # Custom hooks (useChat, useStream, etc.)
      utils/         # Chat utilities (formatting, API helpers)
  shared/
    components/      # Shared UI components (Button, Loader, ThemeToggle, etc.)
    hooks/           # Shared hooks
    utils/           # Shared utilities
  api/
    route.ts         # API route for proxying requests to OpenAI 
public/
  # Static assets (logo, icons, etc.)
src/
  app/globals.css    # Tailwind CSS imports
tests/               # Unit and integration tests
.env.local           # Environment variables (not committed)
tsconfig.json        # TypeScript configuration
```

---

## 🖼️ Visual Preview

> _A screenshot or GIF of the UI will be added here to showcase the look and feel._

---

## ⚡ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:Sawyer0/chatgpt-ui.git
   cd pm-gpt
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**  
   Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your-openai-api-key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 🔑 Environment Variables

| Variable         | Description                | Example                |
|------------------|---------------------------|------------------------|
| OPENAI_API_KEY   | Your OpenAI API key       | sk-...                 |

**Note:** Never commit your API key to version control.

---

## 🧑‍💻 Development Guidelines

- **UI/UX:** Prioritize clarity, accessibility, and responsiveness.
- **Code Quality:** Use ES6+, TypeScript, and follow best practices for React and Next.js.
- **Styling:** Use Tailwind CSS utility classes. Keep custom CSS minimal.
- **Components:** Keep components small, focused, and reusable.
- **State:** Use local state for UI, React Query for async/server state if needed.
- **Error Handling:** Always provide user feedback for errors and loading states.
- **Testing:** Write unit tests for core components and utilities.
- **Accessibility:** Ensure keyboard navigation and ARIA labels where appropriate.

---

## 🎯 MVP Milestones

1. **Project Setup**
   - [X] Next.js app with Tailwind CSS v4 configured
   - [ ] Project structure scaffolded

2. **Core Chat UI**
   - [ ] Chat window with message bubbles (user & assistant)
   - [ ] Input box with send button
   - [ ] Loading indicator for responses
   - [ ] Error message display

3. **API Integration**
   - [ ] Connect to OpenAI ChatGPT API
   - [ ] Stream responses (if supported)
   - [ ] Handle API errors gracefully

4. **UI/UX Enhancements**
   - [ ] Responsive design for mobile/desktop
   - [ ] Dark/light mode toggle
   - [ ] Accessibility improvements

5. **Polish & Testing**
   - [ ] Unit tests for components
   - [ ] Manual QA for edge cases

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## 📄 License

[MIT](LICENSE)

---

## 🙏 Acknowledgements

- [OpenAI](https://openai.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Let's build an amazing ChatGPT UI!**