# User Registration System - Backend API

RESTful API built with NestJS, MongoDB, and TypeScript for secure user registration and authentication.

## Tech Stack

- **Framework**: NestJS 10
- **Database**: MongoDB Atlas (NoSQL)
- **ODM**: Mongoose
- **Language**: TypeScript
- **Authentication**: bcrypt (password hashing)
- **Validation**: class-validator, class-transformer
- **Configuration**: @nestjs/config

## Installation
```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update .env with your MongoDB connection string
```

## Environment Variables

Create a `.env` file in the backend directory:
```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/user-registration?retryWrites=true&w=majority

# Server Port
PORT=3001

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### Getting MongoDB URI

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free M0 cluster
3. Create database user with username and password
4. Whitelist your IP: `0.0.0.0/0` (allow all IPs)
5. Get connection string from "Connect" → "Connect your application"
6. Replace `<password>` with your actual password
7. Add database name after `.net/`: `/user-registration`

## Running the Application

### Development Mode
```bash
npm run start:dev
```
Server will run at: **http://localhost:3001**

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

## API Endpoints

### Base URL
```
http://localhost:3001
```

### Register New User

**Endpoint:** `POST /user/register`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- Email: Must be valid email format
- Password: Minimum 6 characters


## Database Schema

### User Collection
```typescript
{
  _id: ObjectId,           // MongoDB auto-generated ID
  email: string,           // Unique, lowercase, trimmed
  password: string,        // Hashed with bcrypt (salt rounds: 10)
  createdAt: Date,         // Auto-generated timestamp
  __v: number             // Mongoose version key
}
```

**Example Document:**
```json
{
  "_id": "673f8a2c1d4e5f6g7h8i9j0k",
  "email": "user@example.com",
  "password": "$2b$10$rQXhZ8K9vZ8N2vP5eQXhZ8K9vZ8N2vP5eQXhZ8K9vZ8",
  "createdAt": "2024-11-24T04:30:52.123Z",
  "__v": 0
}
```

## Security Features

### Implemented
- Password hashing with bcrypt
- Email validation
- Duplicate email prevention
- CORS enabled for frontend
- Environment variables for sensitive data
- Input validation with class-validator
- Error handling middleware
- Lowercase email normalization
- Trimmed whitespace in emails

### Password Security
- Passwords are hashed using **bcrypt** with 10 salt rounds
- Original passwords are never stored
- Hash format: `$2b$10$[salt][hash]`

## Testing

### Using cURL
```bash
# Register a new user
curl -X POST http://localhost:3001/user/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"123456"}'
```

### Using Postman
1. Method: `POST`
2. URL: `http://localhost:3001/user/register`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

## Monitoring

### Check Server Status
```bash
curl http://localhost:3001
```

### Check Database Connection
Monitor NestJS console logs:
```
[Nest] LOG [InstanceLoader] MongooseModule dependencies initialized
```

### View Users in MongoDB Atlas
1. Login to MongoDB Atlas
2. Browse Collections
3. Select `user-registration` database
4. View `users` collection

## Scripts
```bash
# Development
npm run start:dev        # Start in watch mode

# Production
npm run build           # Build TypeScript to JavaScript
npm run start:prod      # Start production server

# Testing
npm run test           # Run unit tests
npm run test:e2e       # Run end-to-end tests

# Linting
npm run lint           # Run ESLint
npm run format         # Format code with Prettier
```

## Deployment URLs
https://user-registration-system-bip9.onrender.com