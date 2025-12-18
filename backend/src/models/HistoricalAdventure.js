const mongoose = require('mongoose');

const HistoricalAdventureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Historical adventure title is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Historical adventure description is required']
    },
    era: {
      type: String,
      required: [true, 'Historical era is required'],
      enum: ['Ancient', 'Medieval', 'Renaissance', 'Industrial Revolution', 'Modern', 'Contemporary']
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
    estimatedTime: {
      type: Number, // Time in minutes
      default: 15
    },
    scenarios: [
      {
        title: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        backgroundImage: {
          type: String,
          required: false
        },
        choices: [
          {
            text: {
              type: String,
              required: true
            },
            nextScenarioId: {
              type: String, // ID of the next scenario
              required: false // Can be null if this is an ending
            },
            outcome: {
              type: String,
              required: false // Brief description of what happens with this choice
            },
            isHistoricallyAccurate: {
              type: Boolean,
              default: false // Whether this choice represents what actually happened
            },
            learningPoint: {
              type: String,
              required: false // Historical fact or lesson to learn from this choice
            }
          }
        ],
        characters: [
          {
            name: {
              type: String,
              required: true
            },
            role: {
              type: String,
              required: false
            },
            imageUrl: {
              type: String,
              required: false
            },
            dialogues: [
              {
                text: String,
                order: Number
              }
            ]
          }
        ],
        isEnding: {
          type: Boolean,
          default: false // Whether this scenario is an ending
        },
        historicalFacts: [
          {
            fact: String,
            source: String
          }
        ]
      }
    ],
    learningObjectives: [
      {
        type: String
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

// Virtual for scenario count
HistoricalAdventureSchema.virtual('scenarioCount').get(function() {
  return this.scenarios.length;
});

// Virtual to get all possible endings
HistoricalAdventureSchema.virtual('endings').get(function() {
  return this.scenarios.filter(scenario => scenario.isEnding === true);
});

module.exports = mongoose.model('HistoricalAdventure', HistoricalAdventureSchema);
