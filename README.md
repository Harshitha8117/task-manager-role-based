---

# 🌟 **Task Manager — Role-Based Access Control (RBAC)**

A full-stack MERN application that provides secure task management with authentication, authorization, and admin controls.
Developed as part of the **AVPL International Internship Assignment**.

---

## 🚀 **Live Features Overview**

### 👤 **User Features**

* Register & Login
* JWT authentication
* Create tasks
* Edit tasks
* Delete own tasks
* View only own tasks
* Role badge (user)

### 🛡️ **Admin Features**

* View all users
* Promote users to admin
* Delete users
* View all tasks in the system
* Edit or delete any task
* Dashboard analytics:

  * Total Tasks
  * Completed
  * Pending
  * Total Users
* Role badge (admin)

---

## 🧩 **Tech Stack**

### **Frontend**

* React.js
* Vite
* Axios
* TailwindCSS
* React Router
* Responsive UI with modern design

### **Backend**

* Node.js
* Express.js
* MongoDB & Mongoose
* JWT Authentication
* Bcrypt Password Hashing
* Role-Based Middleware

---

## 📁 **Folder Structure**

```
Task-Manager-Role-Based
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── config
│   ├── server.js
│   ├── createAdmin.js
│   └── .env
│
└── frontend
    ├── src
    │   ├── pages
    │   ├── components
    │   ├── api.js
    │   └── App.jsx
```

---

## 🔐 **Environment Variables**

Create a `.env` file inside **backend**:

```
MONGO_URI=your-mongodb-connection
JWT_SECRET=your-secret-key
PORT=5000
```

---

## 🧪 **API Endpoints**

### 🔹 **Auth Routes**

| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| POST   | /api/register | Register new user     |
| POST   | /api/login    | Login & receive token |

### 🔹 **Task Routes**

| Method | Endpoint       | Description                         |
| ------ | -------------- | ----------------------------------- |
| POST   | /api/tasks     | Create a new task                   |
| GET    | /api/tasks     | Get tasks (admin = all, user = own) |
| GET    | /api/tasks/:id | Get task by ID                      |
| PUT    | /api/tasks/:id | Update task                         |
| DELETE | /api/tasks/:id | Delete task                         |

### 🔹 **Admin Routes**

| Method | Endpoint               | Description   |
| ------ | ---------------------- | ------------- |
| GET    | /api/admin/users       | Get all users |
| PUT    | /api/admin/promote/:id | Promote user  |
| DELETE | /api/admin/user/:id    | Delete user   |

---

## 🧑‍💻 **How to Run the Project Locally**

### 📌 **Backend**

```
cd backend
npm install
npm run dev
```

### 📌 **Frontend**

```
cd frontend
npm install
npm run dev
```

Frontend runs on `5173`
Backend runs on `5000`

---

## 🔑 **Default Admin Credentials**

Used to access Admin Panel:

```
email: admin@avpl.com
password: Admin@123
```

---

## 📸 **Screenshots**

### 🔹 User Dashboard

*(insert screenshot here)*

### 🔹 Admin Dashboard

*(insert screenshot here)*

### 🔹 Admin Panel

*(insert screenshot here)*

---

## 🎯 **Assignment Requirement Checklist**

| Requirement                    | Status                  |
| ------------------------------ | ----------------------- |
| User Registration & Login      | ✔ Completed             |
| JWT Authentication             | ✔ Completed             |
| BCrypt Password Hashing        | ✔ Completed             |
| Role-Based Access (User/Admin) | ✔ Completed             |
| Task CRUD Operations           | ✔ Completed             |
| Admin Panel                    | ✔ Completed             |
| View Own Tasks Only (User)     | ✔ Completed             |
| View All Tasks (Admin)         | ✔ Completed             |
| Minimal UI                     | ✔ EXCEEDED (Premium UI) |
| Protected Routes               | ✔ Completed             |
| MongoDB Integration            | ✔ Completed             |

**All assignment requirements have been fully met & exceeded.**

---

## 🌈 **Author**

**Harshitha**
AVPL International Internship
Task Manager with RBAC — Full Stack Developer

---

## 🏁 **Conclusion**

This project implements a secure, scalable, and modern task management system with complete RBAC functionality.
The UI is polished, backend is robust, and all assignment requirements are fully satisfied.

---


Just say **"yes"**!
