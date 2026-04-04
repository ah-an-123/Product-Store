# 🚀 MERN Stack Product Management Application

A full-stack **MERN (MongoDB, Express, React, Node.js)** web application that allows users to manage products through a modern UI and RESTful backend API.

This project demonstrates complete full-stack development including backend API creation, database integration, frontend UI, and production deployment setup.

---

## ✨ Features

* ✅ Create Products
* ✅ View Products
* ✅ Update Products
* ✅ Delete Products
* ✅ REST API with Express.js
* ✅ MongoDB Database Integration
* ✅ Modern React Frontend
* ✅ Production Build Support
* ✅ Environment-based Configuration

---

## 🧰 Tech Stack

### Frontend

* React.js
* Vite
* Chakra UI
* React Router

### Backend

* Node.js
* Express.js (v5)
* MongoDB
* Mongoose

### Development Tools

* Nodemon
* cross-env
* dotenv
* CORS
* Git & GitHub

---

## 📁 Project Structure

```
Product-Store/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routers/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── dist/
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd mern-stack
```

---

### 2️⃣ Install Dependencies

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
npm install --prefix frontend
```

---

### 3️⃣ Environment Variables

Create a `.env` file inside the **backend** folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

---

## 🧪 Run in Development Mode

```bash
npm run dev
```

This will start the backend server using **nodemon**.

---

## 🏗️ Build for Production

```bash
npm run build
```

This command:

* Installs frontend dependencies
* Builds the React app
* Prepares static files for production

---

## ▶️ Run Production Server

```bash
npm run start
```

The Express server will serve both:

* API routes
* React frontend build

---

## 🌐 API Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/products     | Get all products |
| POST   | /api/products     | Create product   |
| PUT    | /api/products/:id | Update product   |
| DELETE | /api/products/:id | Delete product   |

---

## 🎯 What I Learned

* Building REST APIs using Express.js
* MongoDB database modeling with Mongoose
* Connecting React frontend with backend APIs
* Environment-based configuration
* Production deployment setup in MERN stack

---

## 🚀 Future Improvements

* User Authentication (JWT)
* Image Upload Feature
* Product Search & Filters
* Pagination
* User Dashboard

---

## 👨‍💻 Author

**Ahsan Ayaz**

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!
