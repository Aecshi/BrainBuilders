const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');

// Load env vars
dotenv.config();

// Import seed data
const seedUsers = require('./userSeed');
const seedQuizzes = require('./quizSeed');
const seedWordChallenges = require('./wordChallengeSeed');
const seedHistoricalAdventures = require('./historicalAdventureSeed');

// Import models
const User = require('../models/User');
const Quiz = require('../models/Quiz');
const WordChallenge = require('../models/WordChallenge');
const HistoricalAdventure = require('../models/HistoricalAdventure');

// Function to seed data
const seedData = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Delete existing data
    console.log('Deleting existing data...');
    await User.deleteMany();
    await Quiz.deleteMany();
    await WordChallenge.deleteMany();
    await HistoricalAdventure.deleteMany();
    
    console.log('Existing data deleted');

    // Import new data
    console.log('Importing new data...');
    await User.create(seedUsers);
    await Quiz.create(seedQuizzes);
    await WordChallenge.create(seedWordChallenges);
    await HistoricalAdventure.create(seedHistoricalAdventures);
    
    console.log('Data successfully imported');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Function to delete data
const deleteData = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Delete existing data
    console.log('Deleting all data...');
    await User.deleteMany();
    await Quiz.deleteMany();
    await WordChallenge.deleteMany();
    await HistoricalAdventure.deleteMany();
    
    console.log('All data deleted');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Determine which action to take based on command line args
if (process.argv[2] === '-d') {
  deleteData();
} else {
  seedData();
}
