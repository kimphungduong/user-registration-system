# User Registration System

A full-stack web application for user registration and authentication, built with modern technologies.

## Overview

This project is a complete user registration system that includes:
- **Backend API** (NestJS) for handling user registration and data management
- **Frontend Application** (React) for user interaction and interface
- **Database** (MongoDB Atlas) for storing user data securely

## Features

### Backend Features
- RESTful API with NestJS  
- MongoDB database integration  
- User registration endpoint  
- Email validation  
- Password hashing with bcrypt  
- Duplicate email checking  
- Error handling  
- CORS configuration  

### Frontend Features
- Modern UI with Tailwind CSS + shadcn/ui  
- Responsive design (mobile, tablet, desktop)  
- Home page with navigation  
- Sign Up page with form validation  
- Login page with authentication  
- Dashboard page for logged-in users  
- React Query for API state management  
- React Hook Form for form handling  
- Toast notifications for user feedback  

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing
- **React Query** - Data fetching
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Axios** - HTTP client

### Backend
- **NestJS 10** - Node.js framework
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **bcrypt** - Password hashing
- **class-validator** - Input validation

## Installation

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account (or local MongoDB)
- Git

### Clone Repository
```bash
git clone https://github.com/kimphungduong/userregistrationsystem.git
cd user-registration-system
```

### Backend Setup
```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Update .env with your MongoDB URI
MONGODB_URI=your_mongodb_connection_string
PORT=3001
FRONTEND_URL=http://localhost:5173
```

### Frontend Setup
```bash
cd ../frontend
npm install

# Create .env file
cp .env.example .env

# Update .env with backend URL
VITE_API_URL=http://localhost:3001
```

## Running the Application

### Start Backend (Terminal 1)
```bash
cd backend
npm run start:dev
```
Backend will run at: http://localhost:3001

### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend will run at: http://localhost:5173

### Access Application
Open your browser and visit: **http://localhost:5173**

## API Documentation

### Base URL
```
http://localhost:3001
```

### Endpoints

#### Register New User
```http
POST /user/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "id": "673f8a2c1d4e5f6g7h8i9j0k",
    "email": "user@example.com",
    "createdAt": "2024-11-24T04:30:52.123Z"
  }
}
```

## Screenshots

### Home Page
Landing page with Sign Up and Login buttons

### Sign Up Page
User registration form with validation

### Login Page
User login interface

### Dashboard
User dashboard after successful login

## Deployment

### Backend Deployment (Render.com)

### Frontend Deployment (Vercel)

## Testing

### Test User Registration
```bash
curl -X POST http://localhost:3001/user/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"123456"}'
```

### Manual Testing Flow
1. Open http://localhost:5173
2. Click "Sign Up"
3. Register with email and password
4. Success message appears
5. Redirected to Login page
6. Login with registered credentials
7. Redirected to Dashboard
8. See user information
9. Logout returns to Home

## Database

### MongoDB Collections

#### users
```javascript
{
  _id: ObjectId,
  email: String (unique, lowercase),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

## Security

- Passwords hashed with bcrypt (10 salt rounds)
- Email validation and sanitization
- CORS configuration
- Environment variables for sensitive data
- Input validation with class-validator
- Duplicate email prevention

### Grading Rubric (10 points)

| Criteria | Points | Status |
|----------|--------|--------|
| Backend API Endpoint (/register) | 2 | ✅ |
| Error Handling | 2 | ✅ |
| Routing (Home, Login, Sign Up) | 1 | ✅ |
| Sign Up Page (Form, Validation, API Integration) | 2 | ✅ |
| Login Page (Form, Validation, UI) | 2 | ✅ |
| Public Deployment | 1 | ⏳ |