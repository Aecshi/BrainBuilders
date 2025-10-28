# Frontend-Backend Integration

This document explains how the frontend and backend of Happy Hatchery are connected and how data flows between them.

## Overview

The frontend application communicates with the backend API using HTTP requests via Axios. The API endpoints are used to fetch data, authenticate users, and update progress information. The integration is designed to be modular, type-safe, and maintainable.

## Key Files

### API Configuration

- `src/lib/api.ts`: Central API utility file that configures Axios, sets up interceptors for authentication, and exports API functions for all endpoints.

### Authentication

- `src/contexts/AuthContext.tsx`: Manages authentication state throughout the application, handling login, registration, and user profile data.
- `src/components/ProtectedRoute.tsx`: HOC that protects routes requiring authentication.
- `src/pages/Login.tsx` & `src/pages/Register.tsx`: User-facing authentication interfaces.

### Data Fetching

The application uses React Query for efficient data fetching with built-in caching and state management:

- `src/hooks/useQuizzes.ts`: Hooks for fetching and managing quiz data.
- `src/hooks/useWordChallenges.ts`: Hooks for fetching and managing word challenge data.
- `src/hooks/useHistoricalAdventures.ts`: Hooks for fetching and managing historical adventure data.

## Data Flow

### Authentication Flow

1. User enters credentials on Login or Register page
2. Frontend sends credentials to backend API endpoints (`/api/users/login` or `/api/users/register`)
3. Backend validates and responds with a JWT token and user data
4. Frontend stores the token in localStorage and user data in AuthContext
5. AuthProvider automatically includes the token in subsequent API requests
6. Protected routes check for authenticated user and redirect if missing

### Data Loading Flow

1. Components use custom hooks (e.g., `useQuizzes()`) to request data
2. React Query handles caching, loading states, and error handling
3. API requests are sent to backend endpoints
4. Backend responds with data from MongoDB database
5. Data is displayed in the UI with proper loading and error states

### Progress Saving Flow

1. User completes a quiz, word challenge, or historical adventure
2. Frontend calculates the score and progress
3. If authenticated, data is sent to backend via `updateProgress` API call
4. Backend stores the progress in the user's document in MongoDB
5. User's dashboard displays updated progress

## Environment Variables

The API base URL is configured through environment variables:

- Development: `VITE_API_URL=http://localhost:5000/api`
- Production: `VITE_API_URL=https://happy-hatchery-api.onrender.com/api`

## Updated Components

The following frontend components have been updated to use real data from the backend:

1. **App.tsx**: Added AuthProvider and updated route structure to include protected routes.

2. **Index.tsx**: Modified to show different options based on authentication status.

3. **Dashboard.tsx**: Now displays real user data including:

   - Username and grade level
   - Actual quiz completion count
   - Accumulated score from completed activities
   - Word challenges progress

4. **Quiz.tsx**: Completely revamped to:

   - Fetch real quizzes from the API
   - Display questions and options from the database
   - Track and submit user progress
   - Handle loading and error states properly

5. **New Pages**:
   - Login.tsx: Provides authentication interface
   - Register.tsx: Allows new users to sign up

## Error Handling

All API requests include proper error handling:

1. Network errors are caught and displayed via toast notifications
2. Loading states show spinners or placeholder content
3. Error states display user-friendly messages
4. React Query automatically handles retries and cache invalidation

## Authentication & Security

1. JWT tokens are stored in localStorage
2. Auth state is managed globally via Context API
3. API requests automatically include authentication headers
4. Protected routes redirect unauthenticated users
5. Role-based access control is implemented for admin-only features

## Testing the Integration

To test the full integration:

1. Start the backend server: `cd backend && npm run dev`
2. Start the frontend: `npm run dev`
3. Create an account or use a seeded account (admin@example.com / password123)
4. Navigate through the app to test different features
5. Check the browser console and backend logs for any errors
