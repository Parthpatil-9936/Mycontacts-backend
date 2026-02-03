# 📇 MyContacts Backend API

A RESTful backend application for contact management with secure user authentication.  
Built with Node.js, Express.js, MongoDB, and JWT.

This project showcases real-world backend development ideas, such as authentication, protected routes, middleware, and CRUD operations.

---

-> Features:

- User registration and login
- JWT-based authentication
- Create, read, update, and delete contacts
- Each user can see only their own contacts
- Protected routes using middleware
- Global error handling

---

-> Tech Stack:

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JSON Web Token (JWT)
- Tools: Postman, GitHub

---

-> Project Structure

Revised description:
mycontacts-backend/
│
├── config/
│   └── dbConnection.js
├── controllers/
│   ├── contactController.js
│   └── userController.js
├── middleware/
│   └── validateTokenHandler.js
├── models/
│   ├── contactModel.js
│   └── userModel.js
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
├── constants.js
├── server.js
├── .gitignore
├── package.json
└── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository:
git clone https://github.com/Parthpatil-9936/Mycontacts-backend.git
cd Mycontacts-backend

npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=parth1234

---

### 🔹 2️⃣ API Endpoints

## 🔐 API Endpoints

### 👤 User Routes

| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/users/register | Register user |
| POST | /api/users/login | User login |
| GET | /api/users/current | Retrieve current user |

### 📇 Contact Routes (Protected)

| Method | Endpoint | Description |
|------|---------|------------|
| GET | /api/contacts | Retrieve all contacts |
| POST | /api/contacts | Create contact |
| GET | /api/contacts/:id | Retrieve contact |
| PUT | /api/contacts/:id | Update contact |
| DELETE | /api/contacts/:id | Delete contact |

## 🔒 Authentication

This API utilizes JWT for authentication.

Include token in request headers:

## 🧪 Testing

- APIs tested with Postman
- All CRUD operations verified
- Authentication validated

## 📌 Future Improvements

- Search and pagination
- Role-based access control
- Input validation
- Cloud deployment

  ## 👨‍💻 Author

**Parth Dhilan Patil**  
Backend Developer | Node.js | Express | MongoDB|JWT
