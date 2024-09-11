# English-Language-Learning-Platform

This project is an English Language Learning Platform built using the MERN stack (MongoDB, Express.js, React, Node.js). The platform allows users to sign up, sign in, and access various educational resources such as courses, video lessons, quizzes, and an AI assistant.

## Features

- **User Authentication**: Users can sign up, log in, and access protected routes.
- **Courses**: View and enroll in various language courses.
- **Video Lessons**: Access video lessons to enhance learning.
- **Quizzes**: Take quizzes to test language skills.
- **AI Assistant**: Get assistance and guidance from an AI-powered assistant.
- **Virtual Classroom**: Participate in virtual classrooms with other learners.

## Frontend

The frontend is built using **React** with the following key packages:

- **react**: Core library for building user interfaces.
- **react-router-dom**: Enables routing between different pages in the app.
- **axios**: Used for making HTTP requests to the backend API.
- **webpack**: Module bundler used to compile JavaScript and CSS.
- **babel-loader**: Transpiles modern JavaScript and JSX into browser-compatible code.
- **css-loader** and **style-loader**: Allows importing and bundling CSS files within JavaScript.

### Running the Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. The app will be available at `http://localhost:8080/`.

## Backend

The backend is powered by **Node.js** and **Express.js**, connected to a **MongoDB** database. Key packages used:

- **express**: Web framework for handling routes and middleware.
- **mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **dotenv**: Loads environment variables from a `.env` file.
- **bcryptjs**: For hashing passwords securely.
- **jsonwebtoken**: For creating and verifying JWT tokens used in authentication.
- **cors**: Middleware to enable Cross-Origin Resource Sharing (CORS).

### Running the Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB URI and JWT secret key.
4. Start the server: `node server.js`
5. The server will run on `http://localhost:5000/`.

## Getting Started

1. Clone the repository.
2. Set up the environment variables in the backend `.env` file.
3. Start the backend server.
4. Start the frontend server.
5. Visit `http://localhost:8080/` to use the application.

## License

This project is licensed under the MIT License.