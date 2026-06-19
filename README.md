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

