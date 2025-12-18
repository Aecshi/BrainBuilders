const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required']
    },
    plan: {
      type: String,
      enum: ['word_builders', 'quizlet', 'time_travellers'],
      required: [true, 'Subscription plan is required']
    },
    planName: {
      type: String,
      enum: ['Word Builders', 'Quizlet', 'Time Travellers'],
      required: true
    },
    price: {
      type: Number,
      default: 50, // 50 pesos
      required: true
    },
    currency: {
      type: String,
      default: 'PHP',
      required: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'cancelled', 'expired'],
      default: 'active'
    },
    features: {
      type: [String],
      default: [] // Features to be added later
    },
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: {
      type: Date,
      default: function() {
        // Default subscription period: 30 days
        const date = new Date();
        date.setDate(date.getDate() + 30);
        return date;
      }
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    paymentMethod: {
      type: String,
      default: 'manual' // Can be expanded for payment gateway integration
    },
    transactionId: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
);

// Index for efficient queries
SubscriptionSchema.index({ userId: 1, status: 1 });
SubscriptionSchema.index({ userId: 1, plan: 1 });

// Virtual to check if subscription is currently active
SubscriptionSchema.virtual('isActive').get(function() {
  return this.status === 'active' && new Date() < this.endDate;
});

// Static method to get active subscriptions for a user
SubscriptionSchema.statics.getActiveSubscriptions = async function(userId) {
  return this.find({
    userId,
    status: 'active',
    endDate: { $gt: new Date() }
  });
};

// Static method to check if user has specific plan
SubscriptionSchema.statics.hasActivePlan = async function(userId, plan) {
  const subscription = await this.findOne({
    userId,
    plan,
    status: 'active',
    endDate: { $gt: new Date() }
  });
  return !!subscription;
};

module.exports = mongoose.model('Subscription', SubscriptionSchema);
