<p align="center">
  <img src="https://img.icons8.com/3d-fluency/94/checked-2.png" alt="Todo App Logo" width="80"/>
</p>

<h1 align="center">📝 Todo Fullstack App</h1>

<p align="center">
  A modern, full-stack task management application built with <strong>React</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.
  <br/>
  Organize your life — add, edit, search, and track tasks with ease.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Node.js-ES%20Modules-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **User Authentication** | Register & login with per-user data isolation |
| ➕ **Create Tasks** | Add tasks with title, due date, and status |
| ✏️ **Edit Tasks** | Update any task's details in-place |
| 🗑️ **Delete Tasks** | Remove tasks you no longer need |
| ✅ **Toggle Status** | Mark tasks as done or pending with one click |
| 🔍 **Search & Filter** | Instantly search through your task list |
| 🛡️ **Protected Routes** | Only authenticated users can access the dashboard |
| 📱 **Responsive UI** | Works beautifully on desktop and mobile |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                       CLIENT                            │
│   React 19  ·  Vite 8  ·  React Router 7  ·  Axios     │
│                                                         │
│   ┌────────┐  ┌──────┐  ┌──────┐  ┌───────────────┐    │
│   │ Login  │  │Signup│  │ Home │  │  Todo Detail   │    │
│   └────┬───┘  └──┬───┘  └──┬───┘  └───────┬───────┘    │
│        │         │         │               │            │
│        └─────────┴─────────┴───────────────┘            │
│                        │                                │
│               Context API (Global State)                │
└────────────────────────┬────────────────────────────────┘
                         │  HTTP (REST API)
                         ▼
┌────────────────────────────────────────────────────────┐
│                       SERVER                            │
│         Express 5  ·  Mongoose 9  ·  CORS               │
│                                                         │
│   ┌──────────────────────────────────────────────┐      │
│   │  POST /register    →  Create a new user      │      │
│   │  POST /login       →  Authenticate user      │      │
│   │  POST /addTodo     →  Create / Update task   │      │
│   │  GET  /gettodo/:u  →  Get all user tasks     │      │
│   │  GET  /todo/:id/:u →  Get single task        │      │
│   │  PUT  /updatestatus→  Toggle done/pending    │      │
│   │  DELETE /deleteTodo→  Remove a task          │      │
│   └──────────────────────────────────────────────┘      │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
               ┌──────────────────┐
               │    MongoDB 🍃    │
               │  (localhost:27017)│
               │                  │
               │  Users  │  Todos │
               └──────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — UI library with hooks and functional components
- **Vite 8** — Lightning-fast dev server and build tool
- **React Router DOM 7** — Client-side routing with protected routes
- **Axios** — Promise-based HTTP client
- **Context API** — Global state management

### Backend
- **Express 5** — Minimal and flexible Node.js web framework
- **Mongoose 9** — Elegant MongoDB object modeling
- **CORS** — Cross-Origin Resource Sharing middleware
- **Nodemon** — Auto-restart during development

### Database
- **MongoDB** — NoSQL document database

---

## 📂 Project Structure

```
todo-fullstack-app/
│
├── client/                      # React frontend
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── home.jsx         # Dashboard — add, search, list tasks
│   │   │   ├── home.css         # Dashboard styles
│   │   │   ├── login.jsx        # Login page
│   │   │   ├── signup.jsx       # Registration page
│   │   │   ├── Todo.jsx         # Single task detail view
│   │   │   ├── todo.css         # Task detail styles
│   │   │   ├── protectedroute.jsx  # Auth guard for routes
│   │   │   └── NotFound.jsx     # 404 page
│   │   ├── context.js           # React Context for global state
│   │   ├── App.jsx              # Root component with routing
│   │   ├── App.css              # Global app styles
│   │   ├── index.css            # Base styles
│   │   └── main.jsx             # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                      # Express backend
│   ├── models/
│   │   ├── user.js              # User schema (name, email, password)
│   │   └── todo.js              # Todo schema (todoid, todo, date, status, userName)
│   ├── index.js                 # Server entry — routes & DB connection
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later) — [Download](https://nodejs.org/)
- **MongoDB** (running locally on port `27017`) — [Install Guide](https://www.mongodb.com/docs/manual/installation/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/greeshmanth23-debug/todo-fullstack-app.git
cd todo-fullstack-app
```

**2. Install server dependencies**

```bash
cd server
npm install
```

**3. Install client dependencies**

```bash
cd ../client
npm install
```

**4. Start MongoDB**

Make sure MongoDB is running locally:

```bash
mongod
```

**5. Start the backend server**

```bash
cd server
npm start
```

> Server runs on `http://localhost:3001`

**6. Start the frontend dev server**

```bash
cd client
npm run dev
```

> Client runs on `http://localhost:5173`

---

## 🔌 API Reference

### Authentication

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| `POST` | `/register` | `{ name, email, password }` | Register a new user |
| `POST` | `/login` | `{ email, password }` | Login and authenticate |

### Todos

| Method | Endpoint | Body / Params | Description |
|--------|----------|---------------|-------------|
| `POST` | `/addTodo` | `{ todoid, todo, date, status, userName }` | Create or update a task |
| `GET` | `/gettodo/:userName` | — | Fetch all tasks for a user |
| `GET` | `/todo/:todoid/:userName` | — | Fetch a single task |
| `PUT` | `/updatestatus/:todoid/:userName` | — | Toggle task status (done ↔ pending) |
| `DELETE` | `/deleteTodo/:todoid/:userName` | — | Delete a task |

---

## 📸 App Flow

```
   ┌──────────┐        ┌──────────┐        ┌──────────────┐
   │  Signup   │───────▶│  Login   │───────▶│  Dashboard   │
   └──────────┘        └──────────┘        │              │
                                           │  • Add Task  │
                                           │  • Search    │
                                           │  • Edit      │
                                           │  • Delete    │
                                           │  • Toggle ✓  │
                                           └──────┬───────┘
                                                  │
                                           ┌──────▼───────┐
                                           │ Task Detail  │
                                           │  • View info │
                                           │  • Edit      │
                                           │  • Delete    │
                                           └──────────────┘
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/greeshmanth23-debug">greeshmanth23-debug</a>
</p>
