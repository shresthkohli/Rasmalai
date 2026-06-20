# Rasmalai 🍬

A full-stack social posting application built with React, Express, and PostgreSQL.

Users can create accounts, authenticate using sessions, create posts, view posts from other users, manage their own posts, and delete their account.

This project was built to understand how a complete production-style full-stack application works — from database design and backend architecture to frontend state management and deployment.

---

## 🚀 Live Demo

Frontend:
(https://rasmalai-by-shresth.vercel.app/)

Backend API:
https://rasmalai-985u.onrender.com

---

# Features

## Authentication

- User signup
- User login
- Session-based authentication
- Protected routes
- Logout functionality
- Delete account functionality

## Posts

- Create posts
- View all posts
- View user's own posts
- Delete posts
- Posts displayed with author information
- New posts update without full page reload

## Validation

- Backend request validation using Zod
- Input constraints for username and password
- Centralized error handling

---

# Tech Stack

## Frontend

- React
- React Router
- Context API
- Tailwind CSS
- Vite

## Backend

- Node.js
- Express.js
- Cookie-based sessions
- Zod validation
- Middleware architecture

## Database

- PostgreSQL
- node-pg-migrate for migrations

## Deployment

- Vercel (Frontend)
- Render (Backend)
- Supabase (PostgreSQL Database)

---

# Project Architecture

The project follows a layered backend structure.

## Backend structure

Express
│
├── routes
│ └── Defines API endpoints
│
├── controllers
│ └── Handles request/response logic
│
├── services
│ └── Contains business logic and database operations
│
├── middleware
│ ├── Authentication
│ ├── Validation
│ └── Error handling
│
├── migrations
│ └── Database schema changes
│
└── database
└── PostgreSQL connection

## Frontend structure

frontend
│
├── pages
│ └── Application screens
│
├── components
│ └── Reusable UI components
│
├── api
│ └── Backend communication layer
│
├── context
│ └── Global authentication state
│
└── App.jsx
└── Routing configuration


---

# Database Schema

Main tables:

## Users

Stores account information.

Fields:

- id
- username
- password
- created_at


## Posts

Stores user posts.

Fields:

- id
- user_id
- title
- content
- created_at


## Sessions

Stores authentication sessions.

Fields:

- id
- user_id
- session_id
- expires_at
- created_at


Relationship:
User
|
|
└── Posts

User
|
|
└── Sessions

---

# Running Locally

## Backend

Go to backend:

```bash
cd Express
```

Install dependencies:
```
npm install
```

Create .env
EXAMPLE:
```env
DATABASE_URL=your_postgresql_connection_string
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Start server:
```bash
npm start
```
Backend runs on:
localhost:3000

BROOOO 💀💀 you are 100% right.

I see what happened. I wrapped the whole thing in a markdown code block, but then inside I added more triple backticks for the diagrams/code blocks. Markdown sees the **first closing ```** inside as the end of the whole thing, so copy-pasting breaks.

My bad 😂. The correct way is: **send the README content without wrapping the entire response in a code fence**, and only use fences where they actually belong.

Here is the clean copy-paste version from **Frontend section onwards**:

## Frontend

The frontend is built using React and follows a component-based architecture.

```text
frontend
│
├── pages
│     └── Application screens
│
├── components
│     └── Reusable UI components
│
├── api
│     └── Backend communication layer
│
├── context
│     └── Global authentication state
│
└── App.jsx
      └── Routing configuration
```

---

# Database Schema

The application uses PostgreSQL with migrations managed using `node-pg-migrate`.

## Users

Stores user account information.

Fields:

* id
* username
* password
* created_at

## Posts

Stores user-created posts.

Fields:

* id
* user_id
* title
* content
* created_at

## Sessions

Stores authentication sessions.

Fields:

* id
* user_id
* session_id
* expires_at
* created_at

Relationships:

```text
User
 |
 |
 └── Posts


User
 |
 |
 └── Sessions
```

---

# Running Locally

## Backend

Navigate to the backend directory:

```bash
cd Express
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_connection_string
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Run database migrations:

```bash
npm run migrate
```

Start the backend server:

```bash
npm start
```

Backend will run on:

```text
localhost:3000
```

---

## Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend will run on:

```text
localhost:5173
```

---

# Authentication Flow

The application uses cookie-based session authentication.

Flow:

```text
User Login

      ↓

Express validates credentials

      ↓

Session created in PostgreSQL

      ↓

Session ID stored in HTTP-only cookie

      ↓

Protected routes verify session

      ↓

User access granted
```

---

# Deployment Architecture

Production deployment:

```text
              User

               |

               |

          Vercel React

               |

               |

        Render Express API

               |

               |

        Supabase PostgreSQL
```

---

# Challenges Solved

During development, several real-world production issues were handled:

* Cross-origin requests between Vercel and Render
* Production cookies and SameSite configuration
* Session authentication across different domains
* Database migrations in production
* PostgreSQL cloud deployment
* Environment variable configuration
* Linux filename case sensitivity issues
* Production debugging and deployment issues

---

# Future Improvements

Possible improvements:

* Edit posts
* Comments system
* Likes
* Pagination
* User profiles
* Image uploads
* Better UI animations
* Rate limiting
* Password hashing improvements

---

# Author

Shresth Kohli

Built as a learning project to understand full-stack web development, backend architecture, authentication, databases, and production deployment.

---

This one is actually safe to paste directly into `README.md` 😂

Also your guess was right — because my response itself uses markdown formatting, nesting markdown inside markdown is a classic trap. You caught the exact issue. 😭
