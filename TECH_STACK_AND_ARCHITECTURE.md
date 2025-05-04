# Tech Stack & Architecture

---

## 📚 Overview

This document outlines the technology stack and architectural decisions for the ChatGPT UI MVP project. The goal is to ensure a scalable, maintainable, and modern foundation for both the MVP and future growth, with a focus on robust state management and relational data handling.

---

## 🛠️ Tech Stack

| Layer           | Technology         | Purpose                                      |
|-----------------|--------------------|----------------------------------------------|
| Frontend        | Next.js (App Router) | React-based UI, SSR/SSG, routing           |
| Styling         | Tailwind CSS v4    | Utility-first, modern CSS                    |
| State (client)  | Zustand            | Scalable, simple global/local state          |
| Server State    | React Query        | Async data fetching, caching, sync           |
| ORM             | Prisma             | Type-safe, modern database access            |
| Database        | PostgreSQL         | Scalable, relational DB, supports joins      |
| Auth            | NextAuth/Supabase  | Authentication (future extensibility)        |

---

## 🧑‍💻 State Management

- **Zustand** is used for managing local and global state (e.g., chat messages, session, UI state) in a scalable and minimal way.
- **React Query** manages server state, handling API calls, caching, and background updates for data fetched from the backend/database.
- **Context API** is used for infrequently changing global state (e.g., theme, auth context).

---

## 🗄️ Database & ORM

- **PostgreSQL** is the primary database, chosen for its scalability, reliability, and support for complex relational queries and joins.
- **Prisma ORM** provides type-safe, developer-friendly access to the database, with easy migrations and support for advanced relations.

**Example Prisma Schema:**
```prisma
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  chats     Chat[]
}

model Chat {
  id        String        @id @default(uuid())
  user      User          @relation(fields: [userId], references: [id])
  userId    String
  messages  ChatMessage[]
  createdAt DateTime      @default(now())
}

model ChatMessage {
  id        String   @id @default(uuid())
  chat      Chat     @relation(fields: [chatId], references: [id])
  chatId    String
  role      String   // 'user' or 'assistant'
  content   String
  createdAt DateTime @default(now())
}
```

---

## 🛡️ API Layer

- **Next.js API Routes** serve as the backend layer, handling requests from the frontend, interacting with the database via Prisma, and proxying requests to the OpenAI API as needed.
- This separation allows for secure handling of API keys and business logic.

---

## 🏗️ Project Architecture Diagram

```
[Next.js Frontend]
   |
   |-- Zustand (client state: chat, UI, session)
   |-- React Query (server state: fetch chat, users, etc.)
   |
[API Routes (Next.js /api)]
   |
   |-- Prisma ORM
   |
[PostgreSQL Database]
```

---

## 🎯 Rationale & Scalability

- **Why Zustand?**
  - Minimal boilerplate, easy to scale, and works well with React Query.
- **Why React Query?**
  - Handles async data, caching, and background sync, reducing manual state management.
- **Why Prisma + PostgreSQL?**
  - Enables complex relational data and joins, is production-ready, and easy to migrate as the app grows.
- **Why Next.js API Routes?**
  - Keeps backend logic close to the frontend, simplifies deployment, and secures sensitive operations.

---

## 🔗 Resources

- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React Query Documentation](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/router-handlers)

---

**This architecture ensures a solid, scalable foundation for both MVP and future features.** 