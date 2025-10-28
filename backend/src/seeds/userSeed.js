// Sample user seed data
const bcrypt = require('bcryptjs');

const users = [
  {
    username: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'admin',
    grade: null,
  },
  {
    username: 'teacher1',
    email: 'teacher@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'teacher',
    grade: null,
  },
  {
    username: 'student1',
    email: 'student1@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'student',
    grade: '3',
    progress: {
      quizzes: [],
      wordChallenges: [],
      historicalAdventures: []
    }
  },
  {
    username: 'student2',
    email: 'student2@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'student',
    grade: '5',
    progress: {
      quizzes: [],
      wordChallenges: [],
      historicalAdventures: []
    }
  },
];

module.exports = { users };
