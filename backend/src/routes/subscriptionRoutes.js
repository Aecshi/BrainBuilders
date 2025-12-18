const express = require('express');
const {
  getPlans,
  subscribe,
  getMySubscriptions,
  getSubscriptionStatus,
  cancelSubscription,
  getAllSubscriptions
} = require('../controllers/subscriptionController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/plans', getPlans);

// Protected routes (requires authentication)
router.post('/subscribe', protect, subscribe);
router.get('/my-subscriptions', protect, getMySubscriptions);
router.get('/status/:plan', protect, getSubscriptionStatus);
router.put('/cancel/:subscriptionId', protect, cancelSubscription);

// Admin only routes
router.get('/all', protect, authorize('admin'), getAllSubscriptions);

module.exports = router;
