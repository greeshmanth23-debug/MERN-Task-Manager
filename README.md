<p align="center">
  <img src="https://img.icons8.com/3d-fluency/94/checked-2.png" alt="MERN Task Manager" width="80"/>
</p>

<h1 align="center">📝 MERN Task Manager</h1>

<p align="center">
  <strong>A full-stack task management app built to demonstrate my proficiency in React and the MERN stack.</strong>
  <br/>
  This project showcases my ability to build complete, production-style web applications from scratch — covering frontend UI, backend APIs, database design, routing, state management, and authentication flows.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Node.js-ES%20Modules-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
</p>

---

## 🎯 Purpose

This project was built as a **skill demonstration** to prove my hands-on expertise with:

- ⚛️ **React 19** — Hooks, functional components, Context API, conditional rendering
- 🔀 **React Router v7** — Client-side routing, dynamic routes, protected routes, navigation guards
- 🌐 **RESTful API Design** — Building a clean Express backend with proper HTTP methods and status codes
- 🗄️ **MongoDB + Mongoose** — Schema design, CRUD operations, document queries
- 📡 **Axios** — HTTP client for seamless frontend ↔ backend communication
- 🏗️ **Full-Stack Architecture** — Structuring a monorepo with separate client/server codebases

> _This is not just a tutorial follow-along — I designed, structured, and coded every part of this application myself._

---

## ✨ Features

| Feature | What It Demonstrates |
|---------|---------------------|
| 🔐 **User Registration & Login** | Form handling, API integration, user session via localStorage |
| ➕ **Create Tasks** | Controlled inputs, form validation, POST requests |
| ✏️ **Edit Tasks** | Pre-populating forms, PUT requests, state management |
| 🗑️ **Delete Tasks** | DELETE requests, optimistic UI updates |
| ✅ **Toggle Done / Pending** | Status toggling with PUT, conditional CSS classes |
| 🔍 **Real-time Search** | Client-side filtering with regex, instant feedback |
| 🛡️ **Protected Routes** | Auth guards using React Context + React Router |
| 📱 **Responsive Design** | Custom CSS, mobile-friendly layout |
| 📄 **Task Detail View** | Dynamic routing with URL params, single-resource fetching |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     FRONTEND (React)                    │
│   React 19  ·  Vite 8  ·  React Router 7  ·  Axios     │
│                                                         │
│   ┌────────┐  ┌──────┐  ┌──────┐  ┌───────────────┐    │
│   │ Login  │  │Signup│  │ Home │  │  Todo Detail   │    │
│   └────┬───┘  └──┬───┘  └──┬───┘  └───────┬───────┘    │
│        └─────────┴─────────┴───────────────┘            │
│                        │                                │
│               Context API (Global State)                │
└────────────────────────┬────────────────────────────────┘
                         │  REST API (HTTP)
                         ▼
┌────────────────────────────────────────────────────────┐
│                    BACKEND (Express)                    │
│         Express 5  ·  Mongoose 9  ·  CORS               │
│                                                         │
│   POST /register       →  Create new user               │
│   POST /login          →  Authenticate user             │
│   POST /addTodo        →  Create or update task         │
│   GET  /gettodo/:user  →  Get all tasks for user        │
│   GET  /todo/:id/:user →  Get single task               │
│   PUT  /updatestatus   →  Toggle done/pending           │
│   DELETE /deleteTodo   →  Remove a task                 │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
               ┌──────────────────┐
               │    MongoDB 🍃    │
               │                  │
               │  Users  │  Todos │
               └──────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Why I Used It |
|-----------|---------------|
| **React 19** | Industry-standard UI library — demonstrates hooks, state, and component architecture |
| **Vite 8** | Modern build tool — fast HMR, optimized production builds |
| **React Router DOM 7** | Declarative routing with nested and protected routes |
| **Axios** | Clean promise-based HTTP client for API calls |
| **Context API** | Lightweight global state management without Redux overhead |

### Backend
| Technology | Why I Used It |
|-----------|---------------|
| **Express 5** | Minimal, flexible Node.js framework for RESTful APIs |
| **Mongoose 9** | Elegant schema-based MongoDB modeling |
| **CORS** | Cross-origin support for frontend-backend communication |

### Database
| Technology | Why I Used It |
|-----------|---------------|
| **MongoDB** | NoSQL document store — flexible schemas, fast iteration |

---

## 📂 Project Structure

```
MERN-Task-Manager/
│
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── home.jsx             # Dashboard — add, search, list tasks
│   │   │   ├── home.css             # Dashboard styles
│   │   │   ├── login.jsx            # Login page
│   │   │   ├── signup.jsx           # Registration page
│   │   │   ├── Todo.jsx             # Single task detail view
│   │   │   ├── todo.css             # Task detail styles
│   │   │   ├── protectedroute.jsx   # Auth guard component
│   │   │   └── NotFound.jsx         # 404 page
│   │   ├── context.js               # React Context for global state
│   │   ├── App.jsx                  # Root component with routing
│   │   ├── App.css                  # Global styles
│   │   └── main.jsx                 # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                          # Express backend
│   ├── models/
│   │   ├── user.js                  # User schema (name, email, password)
│   │   └── todo.js                  # Todo schema (todoid, todo, date, status, userName)
│   ├── index.js                     # Server entry — routes & DB connection
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ — [Download](https://nodejs.org/)
- **MongoDB** running locally on port `27017` — [Install Guide](https://www.mongodb.com/docs/manual/installation/)

### Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/greeshmanth23-debug/MERN-Task-Manager.git
cd MERN-Task-Manager

# 2. Install server dependencies
cd server
npm install

# 3. Install client dependencies
cd ../client
npm install

# 4. Make sure MongoDB is running
mongod

# 5. Start the backend (in /server)
npm start                  # → runs on http://localhost:3001

# 6. Start the frontend (in /client)
npm run dev                # → runs on http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint | Body / Params | Description |
|--------|----------|---------------|-------------|
| `POST` | `/register` | `{ name, email, password }` | Register a new user |
| `POST` | `/login` | `{ email, password }` | Authenticate user |
| `POST` | `/addTodo` | `{ todoid, todo, date, status, userName }` | Create or update a task |
| `GET` | `/gettodo/:userName` | — | Fetch all tasks for a user |
| `GET` | `/todo/:todoid/:userName` | — | Fetch a single task |
| `PUT` | `/updatestatus/:todoid/:userName` | — | Toggle status (done ↔ pending) |
| `DELETE` | `/deleteTodo/:todoid/:userName` | — | Delete a task |

---

## 🧠 Key React Concepts Demonstrated

```
✅ Functional Components          ✅ useState & useEffect
✅ useContext (Global State)       ✅ useNavigate & useParams
✅ Controlled Form Inputs          ✅ Conditional Rendering
✅ Protected Route Pattern          ✅ Component Composition
✅ Event Handling & Propagation    ✅ Dynamic List Rendering
✅ Client-side Search/Filter       ✅ Axios HTTP Integration
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
  Built with ❤️ by <a href="https://github.com/greeshmanth23-debug"><strong>Ravuri Greeshmanth Sai Venkatesh</strong></a>
  <br/>
  <em>Proving my React & MERN stack skills — one commit at a time.</em>
</p>
