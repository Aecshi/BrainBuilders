const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      minlength: [3, 'Username must be at least 3 characters long']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address'
      ]
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
      select: false // Don't return password in queries
    },
    role: {
      type: String,
      enum: ['student', 'teacher', 'admin'],
      default: 'student'
    },
    grade: {
      type: String,
      enum: ['K', '1', '2', '3', '4', '5', '6'],
      required: false
    },
    progress: {
      quizzes: [{
        quizId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Quiz'
        },
        score: Number,
        completedAt: Date
      }],
      wordChallenges: [{
        challengeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'WordChallenge'
        },
        score: Number,
        completedAt: Date
      }],
      historicalAdventures: [{
        adventureId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'HistoricalAdventure'
        },
        completedAt: Date,
        progress: Number // Percentage completed
      }]
    }
  },
  {
    timestamps: true
  }
);

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
