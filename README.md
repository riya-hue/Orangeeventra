OrangeEventra🍊
OrangeEventra is a MERN-based event booking platform developed as part of an academic assignment.
It allows users to browse events and book tickets, while providing a backend structure for managing events and bookings.
The project is inspired by real-world platforms such as Eventbrite and Ticketmaster.

Features
•	Browse different types of events such as concerts, movies, sports, and comedy shows
•	Step-by-step ticket booking process
•	QR code generation for ticket verification
•	Backend support for event and booking management
•	Responsive frontend design
•	Authentication-ready project structure

Technology Stack
Frontend
•	React.js
•	React Router
•	CSS
Backend
•	Node.js
•	Express.js
•	MongoDB (Mongoose)
•	JWT Authentication (planned)
Project Directory Structure
•	OrangeEventra
backend/ – Contains backend server code, APIs, routes, and database logic
•	public/ – Contains static files such as robots.txt
•	src/ – Contains React frontend source code including index.js
•	README.md – Contains project documentation and setup instructions



Installation and Local Setup
Prerequisites
•	Node.js version 18.x or higher
•	npm version 9.x or higher
•	MongoDB version 6.x
•	Git (latest version)

Backend Installation
1.	Open terminal and navigate to the backend folder
cd backend
2.	Install backend dependencies
npm install
3.	Create a file named .env inside the backend folder and add the following
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/orangeeventra
JWT_SECRET=orangeeventra_secret_key
4.	Start the backend server
npm start
The backend server will run on http://localhost:5000

Frontend Installation
1.	Navigate to the project root directory
2.	Install frontend dependencies
npm install
3.	Start the frontend application
npm start
The frontend application will run on http://localhost:3000

How to Run the Project
1.	Start the MongoDB service
2.	Run the backend server
3.	Run the frontend application
4.	Open a browser and visit http://localhost:3000




