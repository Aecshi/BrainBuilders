const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Quiz title is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Quiz description is required']
    },
    subject: {
      type: String,
      enum: ['English', 'History', 'General Knowledge'],
      required: [true, 'Subject is required']
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
    timeLimit: {
      type: Number, // Time in minutes
      default: 10
    },
    questions: [
      {
        questionText: {
          type: String,
          required: [true, 'Question text is required']
        },
        options: [
          {
            text: {
              type: String,
              required: [true, 'Option text is required']
            },
            isCorrect: {
              type: Boolean,
              default: false
            }
          }
        ],
        explanation: {
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
QuizSchema.virtual('totalPoints').get(function() {
  return this.questions.reduce((total, question) => total + question.points, 0);
});

// Virtual for question count
QuizSchema.virtual('questionCount').get(function() {
  return this.questions.length;
});

module.exports = mongoose.model('Quiz', QuizSchema);
