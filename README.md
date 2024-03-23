# MERN Stack Task Manager Application

This is a Task Manager application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to manage tasks, register, and login.

### Website Url :-...............

## Backend Folder Stucture :-

- `src/components`
  - `TaskList.jsx`
  - `AddDialog.jsx`
  - `UpdateTaskForm.jsx`
  - `DeleteDialog.jsx`
  - `Navbar.jsx`
  - `PrivateRoute.jsx`
  - `Profile.jsx`
  - `LoginForm.jsx`
- `src/pages`
  - `Home.jsx`
  - `Login.jsx`
- `src/App.jsx`
- `src/index.jsx`
- `store`
  - `actions`
    - `authActions.jsx`
    - `taskActions.jsx`
  - `reducers`
    - `authReducer.jsx`
    - `taskReducer.jsx`
  - `store.jsx`

## Frontend Folder Stucture :-

- `mern-backend`
  - `routes`
    - `tasks.js`
    - `auth.js`
  - `models`
    - `Task.js`
    - `User.js`
  - `middleware`
    - `authMiddleware.js`
  - `index.js`

## Features

- CRUD operations on tasks: Users can add, view, update, and delete tasks.
- User authentication: Users can register and login to the application securely.
- Profile management: Users can view and update their profile details.
- Responsive UI: The application is responsive and can be accessed on different devices.

### Landing Page :-

![alt text](frontend/src/assets/LoginPage.png)

### Register Page

![alt text](frontend/src/assets/Register.png)

### HomePage

![alt text](frontend/src/assets/HomePage.png)

## Tech Stack

### Backend

- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing task and user information.
- Mongoose: MongoDB object modeling for Node.js.
- bcryptjs: Library for hashing passwords.
- jsonwebtoken: JSON Web Token implementation for user authentication.
- Express Validator: Middleware for validating request data.

### Frontend

- React.js: JavaScript library for building user interfaces.
- Redux: State management library for managing user authentication and tasks.
- React Router: Declarative routing for React applications.
- Axios: Promise based HTTP client for making requests to the backend.
- Formik: Form library for handling form validation and submission.
- Yup: JavaScript schema builder for value parsing and validation.
- Chakra UI: Utility-first CSS framework for styling the application.

## Setup Instructions

### Backend

1. Clone the backend repository:
   ```bash
   git clone <backend-repo-url>
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   npm start
   ```
