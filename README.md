---

# Task Manager Frontend

## Project Overview

This is the **frontend** for the Task Manager application.
It provides a **user interface** to register, login, and manage tasks. Built with **React, Tailwind CSS**, and connects to the **backend API** for data.

---

## Features

* **Authentication:** Register and login
* **Dashboard:** View all tasks with filters and sorting
* **Task CRUD:** Create, edit, delete tasks
* **Responsive Design:** Works on mobile and desktop
* **Dark Mode:** Toggle between light and dark theme
* **Form Validation:** Client-side validation for login/register and tasks

---

## Tech Stack

* **React** (Vite/React)
* **Tailwind CSS** for styling
* **Axios** for API calls
* **React Router** for navigation
* **Context API / State Hooks** for state management

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

* The app will run at `http://localhost:5173` (or the port Vite provides)

---

## Project Structure

```
frontend/
├─ src/
│  ├─ api/
│  │  └─ api.js            # Axios instance for backend API
│  ├─ components/
│  │  ├─ DarkModeToggle.jsx
│  │  ├─ Sidebar.jsx
│  │  └─ TaskModal.jsx
│  ├─ pages/
│  │  ├─ Dashboard.jsx
│  │  ├─ Login.jsx
│  │  └─ Register.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
└─ package.json
```

---

## API Integration

* All API calls are handled via `src/api/api.js`
* **Base URL** points to your backend (e.g., `http://localhost:5000/api`)
* Axios handles token authorization for protected routes.

---

## Dark Mode

* Toggle button available on the Dashboard
* Stores preference using React state (can be extended to localStorage)

---

## Components Overview

* **Sidebar:** Navigation menu
* **DarkModeToggle:** Switch between light/dark mode
* **TaskModal:** Form modal to create/edit tasks

---

## Notes

* Make sure the backend is running at the configured URL in `api.js`
* Tailwind CSS is used for utility-first styling
* React Router v6 is used for page navigation

---

## Author

**Kishan Kumar**

---