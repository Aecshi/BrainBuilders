/**
 * Seed Production Database
 * Run this script to populate your MongoDB Atlas (production) database
 * 
 * Usage: node src/seeds/seedProduction.js
 */

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Quiz from '../models/Quiz.js';
import WordChallenge from '../models/WordChallenge.js';
import HistoricalAdventure from '../models/HistoricalAdventure.js';

// Import seed data
import { users } from './userSeed.js';
import { quizzes } from './quizSeed.js';
import { wordChallenges } from './wordChallengeSeed.js';
import { historicalAdventures } from './historicalAdventureSeed.js';

dotenv.config();

// IMPORTANT: Set this to your production MongoDB URI
const PRODUCTION_MONGO_URI = process.env.MONGODB_URI;

const seedProduction = async () => {
  try {
    console.log('🌱 Starting production database seed...');
    console.log('📍 Connecting to:', PRODUCTION_MONGO_URI ? 'MongoDB Atlas (Production)' : 'ERROR: No MONGODB_URI found');

    if (!PRODUCTION_MONGO_URI) {
      console.error('❌ Error: MONGODB_URI environment variable not set!');
      console.log('💡 Set your production MongoDB URI as an environment variable:');
      console.log('   Windows: $env:MONGODB_URI="your_mongodb_atlas_uri"');
      console.log('   Linux/Mac: export MONGODB_URI="your_mongodb_atlas_uri"');
      process.exit(1);
    }

    // Connect to MongoDB Atlas
    await mongoose.connect(PRODUCTION_MONGO_URI);
    console.log('✅ Connected to MongoDB Atlas (Production)');

    // Optional: Clear existing data (comment out if you want to keep existing data)
    console.log('🗑️  Clearing existing data...');
    await User.deleteMany({});
    await Quiz.deleteMany({});
    await WordChallenge.deleteMany({});
    await HistoricalAdventure.deleteMany({});
    console.log('✅ Existing data cleared');

    // Seed Users
    console.log('👥 Seeding users...');
    await User.create(users);
    console.log(`✅ ${users.length} users seeded`);

    // Seed Quizzes
    console.log('📝 Seeding quizzes...');
    await Quiz.create(quizzes);
    console.log(`✅ ${quizzes.length} quizzes seeded`);

    // Seed Word Challenges
    console.log('📚 Seeding word challenges...');
    await WordChallenge.create(wordChallenges);
    console.log(`✅ ${wordChallenges.length} word challenges seeded`);

    // Seed Historical Adventures
    console.log('🏛️  Seeding historical adventures...');
    await HistoricalAdventure.create(historicalAdventures);
    console.log(`✅ ${historicalAdventures.length} historical adventures seeded`);

    console.log('🎉 Production database seeded successfully!');
    console.log('📊 Summary:');
    console.log(`   - ${users.length} users`);
    console.log(`   - ${quizzes.length} quizzes`);
    console.log(`   - ${wordChallenges.length} word challenges`);
    console.log(`   - ${historicalAdventures.length} historical adventures`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding production database:', error.message);
    console.error(error);
    process.exit(1);
  }
};

seedProduction();

