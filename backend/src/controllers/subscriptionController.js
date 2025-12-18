const Subscription = require('../models/Subscription');

// Plan details configuration
const PLAN_DETAILS = {
  word_builders: {
    planName: 'Word Builders',
    price: 50,
    currency: 'PHP',
    features: [] // Features to be added later
  },
  quizlet: {
    planName: 'Quizlet',
    price: 50,
    currency: 'PHP',
    features: [] // Features to be added later
  },
  time_travellers: {
    planName: 'Time Travellers',
    price: 50,
    currency: 'PHP',
    features: [] // Features to be added later
  }
};

/**
 * @desc    Get all subscription plans
 * @route   GET /api/subscriptions/plans
 * @access  Public
 */
exports.getPlans = async (req, res) => {
  try {
    const plans = Object.entries(PLAN_DETAILS).map(([key, value]) => ({
      id: key,
      ...value
    }));

    res.status(200).json({
      success: true,
      plans
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Subscribe to a plan
 * @route   POST /api/subscriptions/subscribe
 * @access  Private
 */
exports.subscribe = async (req, res) => {
  try {
    const { plan } = req.body;
    const userId = req.user._id;

    // Validate plan
    if (!PLAN_DETAILS[plan]) {
      return res.status(400).json({
        success: false,
        message: 'Invalid subscription plan. Choose from: word_builders, quizlet, time_travellers'
      });
    }

    // Check if user already has an active subscription for this plan
    const existingSubscription = await Subscription.findOne({
      userId,
      plan,
      status: 'active',
      endDate: { $gt: new Date() }
    });

    if (existingSubscription) {
      return res.status(400).json({
        success: false,
        message: `You already have an active ${PLAN_DETAILS[plan].planName} subscription`
      });
    }

    // Create new subscription
    const subscription = await Subscription.create({
      userId,
      plan,
      planName: PLAN_DETAILS[plan].planName,
      price: PLAN_DETAILS[plan].price,
      currency: PLAN_DETAILS[plan].currency,
      features: PLAN_DETAILS[plan].features,
      status: 'active',
      paymentStatus: 'completed' // For now, mark as completed. Integrate payment gateway later.
    });

    res.status(201).json({
      success: true,
      message: `Successfully subscribed to ${PLAN_DETAILS[plan].planName}`,
      subscription
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get user's subscriptions
 * @route   GET /api/subscriptions/my-subscriptions
 * @access  Private
 */
exports.getMySubscriptions = async (req, res) => {
  try {
    const userId = req.user._id;

    const subscriptions = await Subscription.find({ userId })
      .sort({ createdAt: -1 });

    // Get active subscriptions
    const activeSubscriptions = subscriptions.filter(
      sub => sub.status === 'active' && new Date() < sub.endDate
    );

    res.status(200).json({
      success: true,
      total: subscriptions.length,
      activeCount: activeSubscriptions.length,
      subscriptions,
      activeSubscriptions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get subscription status for a specific plan
 * @route   GET /api/subscriptions/status/:plan
 * @access  Private
 */
exports.getSubscriptionStatus = async (req, res) => {
  try {
    const { plan } = req.params;
    const userId = req.user._id;

    // Validate plan
    if (!PLAN_DETAILS[plan]) {
      return res.status(400).json({
        success: false,
        message: 'Invalid subscription plan'
      });
    }

    const subscription = await Subscription.findOne({
      userId,
      plan,
      status: 'active',
      endDate: { $gt: new Date() }
    });

    res.status(200).json({
      success: true,
      isSubscribed: !!subscription,
      subscription: subscription || null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Cancel subscription
 * @route   PUT /api/subscriptions/cancel/:subscriptionId
 * @access  Private
 */
exports.cancelSubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.params;
    const userId = req.user._id;

    const subscription = await Subscription.findOne({
      _id: subscriptionId,
      userId
    });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Subscription not found'
      });
    }

    if (subscription.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Subscription is already cancelled'
      });
    }

    subscription.status = 'cancelled';
    await subscription.save();

    res.status(200).json({
      success: true,
      message: 'Subscription cancelled successfully',
      subscription
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get all subscriptions (Admin only)
 * @route   GET /api/subscriptions/all
 * @access  Private/Admin
 */
exports.getAllSubscriptions = async (req, res) => {
  try {
    const { status, plan, page = 1, limit = 10 } = req.query;

    const query = {};
    if (status) query.status = status;
    if (plan) query.plan = plan;

    const subscriptions = await Subscription.find(query)
      .populate('userId', 'username email')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Subscription.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      subscriptions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
