const mongoose = require('mongoose');

const WordChallengeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Word challenge title is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Word challenge description is required']
    },
    gradeLevel: {
      type: String,
      enum: ['K', '1', '2', '3', '4', '5', '6'],
      required: [true, 'Grade level is required']
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      default: 'Medium'
    },
    type: {
      type: String,
      enum: ['Spelling', 'Vocabulary', 'Grammar', 'Definitions', 'Word Search'],
      required: [true, 'Challenge type is required']
    },
    timeLimit: {
      type: Number, // Time in minutes
      default: 5
    },
    words: [
      {
        word: {
          type: String,
          required: [true, 'Word is required']
        },
        definition: {
          type: String,
          required: false
        },
        sentence: {
          type: String, // Example sentence using the word
          required: false
        },
        hint: {
          type: String,
          required: false
        },
        points: {
          type: Number,
          default: 1
        },
        imageUrl: {
          type: String,
          required: false
        }
      }
    ],
    instructions: {
      type: String,
      required: [true, 'Instructions are required']
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual for total points
WordChallengeSchema.virtual('totalPoints').get(function() {
  return this.words.reduce((total, word) => total + word.points, 0);
});

// Virtual for word count
WordChallengeSchema.virtual('wordCount').get(function() {
  return this.words.length;
});

module.exports = mongoose.model('WordChallenge', WordChallengeSchema);
