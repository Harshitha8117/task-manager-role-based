# Backend - Task Manager (Express + MongoDB)

## Setup
1. Copy `.env.example` to `.env` and fill values.
2. `cd backend`
3. `npm install`
4. `npm run dev` (requires nodemon) or `npm start`

API base: `http://localhost:5000/api`

Auth:
- POST /api/register
- POST /api/login

Tasks (token required in Authorization header `Bearer <token>`):
- POST /api/tasks
- GET /api/tasks
- GET /api/tasks/:id
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
