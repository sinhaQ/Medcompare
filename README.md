# MedCompare 💊

### Compare Medicine Prices & Lab Tests in One Place

MedCompare is a web-based healthcare comparison platform designed to help users compare medicine prices across different pharmacies and compare diagnostic test prices across hospitals and laboratories.

The goal is to make healthcare services more transparent, accessible, and affordable by helping users make informed decisions.

## 🚀 Project Overview

MedCompare provides a user-friendly platform where users can:

- Search for medicines by name, brand, or generic name.
- Compare medicine prices across multiple pharmacies.
- Identify the best available price for a medicine.
- Check medicine availability and estimated delivery information.
- Explore diagnostic tests and compare prices across hospitals and laboratories.
- View hospital and laboratory details, ratings, and test-related information.
- Access the platform through a responsive web interface.

## ✅ Features Implemented

### 1. Frontend Development
- Built the website using HTML, CSS, and JavaScript.
- Designed a modern and user-friendly interface.
- Created medicine search and comparison sections.
- Developed lab test and hospital comparison pages.
- Added login, user profile, and guest access interfaces.
- Implemented responsive layouts for mobile and desktop screens.

### 2. Backend Development
- Developed the backend using Node.js and Express.js.
- Implemented RESTful API endpoints.
- Organized the backend using controllers, routes, models, and middleware.
- Integrated frontend functionality with backend APIs.
- Added centralized error-handling middleware.

### 3. Database Integration
- Integrated MongoDB Atlas using Mongoose.
- Created database models for:
  - Medicines
  - Stores
  - Medicine Prices
  - Lab Tests
  - Hospitals
  - Lab Test Prices
- Implemented database seeding to populate initial project data.

### 4. Medicine Price Comparison
- Medicine search API.
- Individual medicine details API.
- Pharmacy-wise price comparison.
- Stock availability information.
- Best-price identification.
- Price-based sorting.

### 5. Lab Test & Hospital Comparison
- Lab test search and details.
- Hospital-wise diagnostic test comparison.
- Test pricing and availability information.
- Hospital ratings and accreditation details.
- Estimated report turnaround times.

### 6. API Testing
- Tested backend health endpoint.
- Tested medicine listing and search APIs.
- Tested individual medicine details.
- Tested medicine price comparison API.
- Tested lab test comparison API.
- Verified frontend and backend communication.

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| API Architecture | REST APIs |
| Development Tools | VS Code, Git, GitHub |

## 📁 Project Structure

```text
MedCompare/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seeds/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
│
├── frontend/
│   ├── index.html
│   └── medicinesData.js
│
├── docs/
│
├── .gitignore
├── package.json
└── package-lock.json
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js
- MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/sinhaQ/Medcompare.git
```

### 2. Navigate to the Project

```bash
cd Medcompare
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` folder using `.env.example` as a reference.

Add your MongoDB connection string:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Never upload your actual `.env` file or database credentials to GitHub.

### 5. Start the Backend Server

```bash
npm run dev
```

### 6. Run the Frontend

Open `frontend/index.html` using VS Code Live Server.

## 🔗 API Endpoints

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Check backend status |
| GET | `/
