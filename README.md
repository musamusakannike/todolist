# To-Do List App

A full-stack To-Do List app built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and **React (Vite)**. This app goes beyond the basics by offering task prioritization, collaboration, reminders, analytics, and more, making it a powerful productivity tool.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Documentation](#api-documentation)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features

- **CRUD Operations**: Create, read, update, and delete tasks.
- **Task Prioritization**: Assign priority levels (High, Medium, Low) and categories to tasks.
- **Subtasks and Checklists**: Break down tasks into subtasks for detailed tracking.
- **Reminders and Notifications**: Set reminders and get notified.
- **Real-Time Collaboration**: Share tasks with others and collaborate in real-time.
- **Gamification**: Track progress with streaks and gain rewards for completed tasks.
- **Smart Input**: Use voice commands or natural language input.
- **Offline Mode**: Access and edit tasks offline with syncing.
- **Data Insights**: View productivity trends and task analytics.

---

## Tech Stack

### Frontend
- **React** with **Vite** for a fast and optimized React app.
- **Animate.css** for animations and **Font Awesome** for icons.

### Backend
- **Node.js** and **Express** for the server and routing.
- **MongoDB (Mongoose)** for database storage.
- **JWT** for secure user authentication.

### Other
- **Axios** for API requests.
- **Socket.IO** for real-time task updates (if collaboration is enabled).
- **Docker** for containerized deployment.

---

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/todo-list-app.git
   cd todo-list-app
   ```

2. **Backend Setup**:
   - Navigate to the `backend` folder.
   - Install dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Configure environment variables (see below).
   - Start the server:
     ```bash
     npm start
     ```
   - The server runs on `http://localhost:8080`.

3. **Frontend Setup**:
   - Navigate to the `frontend` folder.
   - Install dependencies:
     ```bash
     cd ../frontend
     npm install
     ```
   - Start the Vite development server:
     ```bash
     npm run dev
     ```
   - The frontend runs on `http://localhost:5173`.

---

## Environment Variables

Create a `.env` file in the `backend` folder with the following values:

```plaintext
# Backend
MONGO_URI=mongodb://localhost:27017/todo-app
PORT=8080
JWT_SECRET=your_jwt_secret
```

---

## Usage

1. **Access the App**: Open `http://localhost:5173` in your browser.
2. **Add Tasks**: Use the input field to add tasks with optional priority and due dates.
3. **Manage Tasks**: Click on a task to mark it as complete, or edit/delete it as needed.
4. **Collaborate**: Invite users via the task settings.
5. **Analytics**: Visit the analytics page to view your productivity insights.

---

## Folder Structure

The project is divided into `frontend` and `backend` folders:

```
todo-list-app/
├── backend/
│   ├── config/          # Database and environment configuration
│   ├── controllers/     # Request handling for tasks, users, etc.
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middleware/      # Middleware for authentication and error handling
│   ├── server.js        # Main server file
│   └── .env             # Environment variables
├── frontend/
│   ├── public/          # Static assets
│   ├── src/             
│   │   ├── components/  # Reusable components (Task, Alert, Spinner, etc.)
│   │   ├── pages/       # Pages (Home, Analytics, etc.)
│   │   ├── services/    # Axios API calls
│   │   ├── App.jsx      # Main App component
│   │   └── main.jsx     # Entry point
└── README.md            # Project documentation
```

---

## API Documentation

### Base URL

```
http://localhost:8080/api
```

### Endpoints

1. **Tasks**
   - `GET /tasks`: Get all tasks.
   - `POST /tasks`: Create a new task.
   - `PUT /tasks/:id`: Update a task.
   - `DELETE /tasks/:id`: Delete a task.

2. **Users**
   - `POST /auth/register`: Register a new user.
   - `POST /auth/login`: Log in and get a JWT token.

3. **Reminders**
   - `POST /tasks/:id/reminder`: Set a reminder for a task.

_For full API documentation, see `backend/routes`._

---

## Future Improvements

- **Mobile App**: Develop a React Native version for mobile users.
- **Task Dependencies**: Allow tasks to depend on the completion of other tasks.
- **Natural Language Parsing**: Enhanced NLP for complex commands like “Finish report by next Monday.”
- **Customizable Themes**: Let users create and apply custom themes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
