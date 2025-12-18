const express = require('express');
const {
  getQuizzes,
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getQuizzesBySubject,
  getQuizzesByGradeLevel
} = require('../controllers/quizController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getQuizzes);
// Move specific routes BEFORE the dynamic :id route
router.get('/subject/:subject', getQuizzesBySubject);
router.get('/grade/:gradeLevel', getQuizzesByGradeLevel);
// The generic parameter route should come AFTER more specific routes
router.get('/:id', getQuiz);

// Protected routes - Admin only
router.post('/', protect, authorize('admin'), createQuiz);
router.put('/:id', protect, authorize('admin'), updateQuiz);
router.delete('/:id', protect, authorize('admin'), deleteQuiz);

module.exports = router;