# User Registration System - Frontend

Modern and responsive frontend application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form + Zod
- **HTTP Client**: Axios
- **UI Components**: shadcn/ui

## Installation
```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update .env with your backend URL
VITE_API_URL=http://localhost:3001
```

## Running the Application

### Development Mode
```bash
npm run dev
```
Application will run at: **http://localhost:5173**

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Features

### Features
- Home page with navigation
- User registration (Sign Up)
- User login with mock authentication
- Dashboard with user information
- Form validation (email, password)
- Error handling with toast notifications
- Success feedback messages
- Responsive design (mobile, tablet, desktop)
- Loading states for API calls
- Logout functionality

### API Integration
- **POST /user/register** - Register new user
- React Query for caching and state management
- Axios for HTTP requests
- Error handling with user-friendly messages

## UI Components

Built with **shadcn/ui** - A collection of beautifully designed components:
- Button
- Input
- Label
- Card
- Toast/Toaster


## Configuration Files

### `.env`
```env
VITE_API_URL=http://localhost:3001
```

### Environment Variables for Production
Make sure to set `VITE_API_URL` to your production backend URL.
