# Deploying Happy Hatchery Backend to Render

This guide walks through deploying the backend API to Render.com.

## Prerequisites

1. A Render.com account
2. A MongoDB Atlas account with a cluster created

## Deployment Steps

### 1. MongoDB Atlas Setup

1. Log in to your MongoDB Atlas account
2. Create a new cluster or use an existing one
3. Create a database user with read/write permissions:
   - Username: [your-username]
   - Password: [secure-password]
   - Auth Method: Password
4. Set up Network Access:
   - IP Access List: Add `0.0.0.0/0` (to allow access from Render)
5. Get your connection string from the "Connect" button:
   - Choose "Connect your application"
   - Copy the connection string (it will look like `mongodb+srv://username:password@cluster0.mongodb.net/happy-hatchery?retryWrites=true&w=majority`)

### 2. Deploy to Render

#### Option 1: Using the Dashboard

1. Log in to your Render account
2. Click "New" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - Name: happy-hatchery-api
   - Root Directory: backend (if your repository has both frontend and backend)
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add environment variables:
   - PORT: 10000
   - NODE_ENV: production
   - MONGODB_URI: (paste your MongoDB connection string)
   - JWT_SECRET: (generate a random string or use the Render auto-generate feature)
6. Set the "Instance Type" to Free
7. Click "Create Web Service"

#### Option 2: Using render.yaml (Recommended)

1. Ensure your repository has the `render.yaml` file in the backend directory
2. Log in to your Render account
3. Click "New" and select "Blueprint"
4. Connect your GitHub repository
5. Render will detect the render.yaml file and create the service
6. You'll still need to manually add the MONGODB_URI environment variable

### 3. Verify Deployment

1. Once deployed, open the Render dashboard and click on your service
2. Click on the URL to access your API
3. You should see a message like "Happy Hatchery Educational Game API"
4. You can also visit `/health` to check the API's health status

## Troubleshooting

- If deployment fails, check the Render logs
- Ensure your MongoDB Atlas connection string is correct
- Verify all environment variables are properly set
- If CORS issues occur, confirm your frontend URL is included in the CORS configuration
