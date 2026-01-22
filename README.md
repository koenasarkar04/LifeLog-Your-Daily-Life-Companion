# LifeLog-Your-Daily-Life-Companion
<br>
Author - Koena Sarkar :/

LifeLog is a simple full-stack web application that helps users track their daily life activities such as mood, food intake, water consumption, and sleep.  
It is designed as a beginner-friendly project to understand complete end-to-end web development including frontend, backend, database, and DevOps basics.

---

## 🚀 Features

- User registration and login
- Secure authentication using JWT
- Daily mood and notes logging
- Food intake tracking
- Water consumption tracking
- Sleep hours tracking
- Simple dashboard with daily summaries

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- React

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### DevOps
- Docker
- Docker Compose
- GitHub Actions (CI/CD)

---

## 🧩 How the Application Works

- The frontend (React) provides the user interface
- The backend (Node.js + Express) handles API requests and business logic
- The database (PostgreSQL) stores all user and daily life data
- Authentication is handled using JSON Web Tokens (JWT)
- Docker is used to containerize the application
- CI/CD pipelines automate building and deployment

---

## 📁 Project Structure

```bash
lifelog/
│
├── frontend/        # React frontend
├── backend/         # Node.js backend
│   ├── routes/      # API routes
│   ├── controllers/ # Request handling logic
│   ├── models/      # Database models
│
├── docker-compose.yml
└── README.md
