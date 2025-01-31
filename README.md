Backend Link
https://github.com/AniOpd/Study_App_Backend

StudyApp
StudyGharPar website, a platform connecting home tutors and students.

Table of Contents
Features
Installation
Usage
Scripts
Dependencies
Features
User authentication and authorization
Email notifications with Nodemailer
Integration with Google Maps API
Installation
Prerequisites
Node.js
npm or yarn
MongoDB
Backend
Navigate to the backend directory:

cd backend
Install the dependencies:

npm install
Create a .env file in the backend directory and add your environment variables:

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
Start the backend server:

npm run dev
Frontend
Navigate to the frontend directory:

cd frontend
Install the dependencies:

npm install
Create a .env file in the frontend directory and add your environment variables:

VITE_MAP_KEY=your_google_maps_api_key
Start the frontend development server:

npm run dev
Usage
Once both the backend and frontend servers are running, you can access the application in your web browser at http://localhost:3000.

Scripts
Backend
npm run dev: Starts the backend server with nodemon for development.
npm start: Starts the backend server with Node.js.
npm test: Runs the test suite.
Frontend
npm run dev: Starts the frontend development server.
npm run build: Builds the frontend for production.
npm run serve: Serves the built frontend.
Dependencies
Backend
bcrypt: ^5.1.1
cloudinary: ^2.3.1
cookie-parser: ^1.4.6
dotenv: ^16.4.5
express: ^4.19.2
jsonwebtoken: ^9.0.2
mongodb: ^6.8.0
mongoose: ^8.5.0
multer: ^1.4.5-lts.1
nodemailer: ^6.9.14
socket.io: ^4.7.5
Frontend
React
Vite
@vitejs/plugin-react
@vitejs/plugin-react-swc
html-webpack-plugin
