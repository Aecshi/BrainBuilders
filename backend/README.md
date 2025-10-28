# Happy Hatchery Educational Game API

Backend API for the Happy Hatchery educational game platform. This API provides endpoints for quizzes, word challenges, historical adventures, and user management.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/happy-hatchery
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

### Running the Application

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm start
```

### Seeding the Database

To populate the database with sample data:

```bash
npm run seed
```

To delete all data:

```bash
npm run seed -- -d
```

## API Endpoints

### Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login and receive JWT token

### Users

- `GET /api/users/profile` - Get user profile (requires auth)
- `PUT /api/users/profile` - Update user profile (requires auth)
- `PUT /api/users/progress` - Update user progress (requires auth)
- `GET /api/users` - Get all users (admin only)

### Quizzes

- `GET /api/quizzes` - Get all quizzes
- `GET /api/quizzes/:id` - Get a specific quiz
- `POST /api/quizzes` - Create a quiz (admin only)
- `PUT /api/quizzes/:id` - Update a quiz (admin only)
- `DELETE /api/quizzes/:id` - Delete a quiz (admin only)
- `GET /api/quizzes/subject/:subject` - Get quizzes by subject
- `GET /api/quizzes/grade/:gradeLevel` - Get quizzes by grade level

### Word Challenges

- `GET /api/word-challenges` - Get all word challenges
- `GET /api/word-challenges/:id` - Get a specific word challenge
- `POST /api/word-challenges` - Create a word challenge (admin only)
- `PUT /api/word-challenges/:id` - Update a word challenge (admin only)
- `DELETE /api/word-challenges/:id` - Delete a word challenge (admin only)
- `GET /api/word-challenges/type/:type` - Get word challenges by type
- `GET /api/word-challenges/grade/:gradeLevel` - Get word challenges by grade level

### Historical Adventures

- `GET /api/historical-adventures` - Get all historical adventures
- `GET /api/historical-adventures/:id` - Get a specific historical adventure
- `POST /api/historical-adventures` - Create a historical adventure (admin only)
- `PUT /api/historical-adventures/:id` - Update a historical adventure (admin only)
- `DELETE /api/historical-adventures/:id` - Delete a historical adventure (admin only)
- `GET /api/historical-adventures/era/:era` - Get historical adventures by era
- `GET /api/historical-adventures/grade/:gradeLevel` - Get historical adventures by grade level

## Deployment

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user with read/write privileges
4. Whitelist all IP addresses (0.0.0.0/0) or specific IPs
5. Get your connection string from Connect > Connect Your Application
6. Replace the username, password, and database name in the connection string

### Deploying to Render

1. Create a Render account at [https://render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the following settings:
   - Name: happy-hatchery-api
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add the following environment variables:
   - `PORT`: 10000
   - `NODE_ENV`: production
   - `JWT_SECRET`: (generate a secure random string)
   - `MONGODB_URI`: (your MongoDB Atlas connection string)
6. Click "Create Web Service"
