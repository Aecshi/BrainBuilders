const express = require('express');
const {
  getWordChallenges,
  getWordChallenge,
  createWordChallenge,
  updateWordChallenge,
  deleteWordChallenge,
  getWordChallengesByType,
  getWordChallengesByGradeLevel
} = require('../controllers/wordChallengeController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getWordChallenges);
// Move specific routes BEFORE the dynamic :id route
router.get('/type/:type', getWordChallengesByType);
router.get('/grade/:gradeLevel', getWordChallengesByGradeLevel);
// The generic parameter route should come AFTER more specific routes
router.get('/:id', getWordChallenge);

// Protected routes - Admin only
router.post('/', protect, authorize('admin'), createWordChallenge);
router.put('/:id', protect, authorize('admin'), updateWordChallenge);
router.delete('/:id', protect, authorize('admin'), deleteWordChallenge);

module.exports = router;