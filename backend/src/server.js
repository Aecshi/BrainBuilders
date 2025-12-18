const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

// Load environment variables
dotenv.config();

// Import routes
const quizRoutes = require('./routes/quizRoutes');
const wordChallengeRoutes = require('./routes/wordChallengeRoutes');
const historicalAdventureRoutes = require('./routes/historicalAdventureRoutes');
const userRoutes = require('./routes/userRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

// Initialize express app
const app = express();

// Enhanced CORS setup for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? [
        'https://brain-builders.vercel.app',
        'https://brainbuilders.vercel.app',
        /\.vercel\.app$/ // Allow all vercel.app subdomains for dev deployments
      ]
    : 'http://localhost:8082', // Development frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Additional security headers for production
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Frame-Options', 'DENY');
    next();
  });
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/quizzes', quizRoutes);
app.use('/api/word-challenges', wordChallengeRoutes);
app.use('/api/historical-adventures', historicalAdventureRoutes);
app.use('/api/users', userRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', environment: process.env.NODE_ENV });
});

// Seed endpoint to populate database
app.get('/api/seed', async (req, res) => {
  try {
    const Quiz = require('./models/Quiz');
    const WordChallenge = require('./models/WordChallenge');
    const HistoricalAdventure = require('./models/HistoricalAdventure');
    
    const seedQuizzes = require('./seeds/quizSeed');
    const seedWordChallenges = require('./seeds/wordChallengeSeed');
    const seedHistoricalAdventures = require('./seeds/historicalAdventureSeed');
    
    // Clear existing data
    await Quiz.deleteMany();
    await WordChallenge.deleteMany();
    await HistoricalAdventure.deleteMany();
    
    // Insert seed data
    await Quiz.create(seedQuizzes);
    await WordChallenge.create(seedWordChallenges);
    await HistoricalAdventure.create(seedHistoricalAdventures);
    
    res.json({ 
      success: true, 
      message: 'Database seeded successfully!',
      data: {
        quizzes: seedQuizzes.length,
        wordChallenges: seedWordChallenges.length,
        historicalAdventures: seedHistoricalAdventures.length
      }
    });
  } catch (error) {
    console.error('Seed error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Happy Hatchery Educational Game API',
    environment: process.env.NODE_ENV,
    version: '1.0.0'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Server Error' : err.message
  });
});

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
};

startServer();

module.exports = app; // Export for testing purposes