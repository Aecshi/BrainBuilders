const express = require('express');
const {
  getHistoricalAdventures,
  getHistoricalAdventure,
  createHistoricalAdventure,
  updateHistoricalAdventure,
  deleteHistoricalAdventure,
  getHistoricalAdventuresByEra,
  getHistoricalAdventuresByGradeLevel
} = require('../controllers/historicalAdventureController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getHistoricalAdventures);
// Move specific routes BEFORE the dynamic :id route
router.get('/era/:era', getHistoricalAdventuresByEra);
router.get('/grade/:gradeLevel', getHistoricalAdventuresByGradeLevel);
// The generic parameter route should come AFTER more specific routes
router.get('/:id', getHistoricalAdventure);

// Protected routes - Admin only
router.post('/', protect, authorize('admin'), createHistoricalAdventure);
router.put('/:id', protect, authorize('admin'), updateHistoricalAdventure);
router.delete('/:id', protect, authorize('admin'), deleteHistoricalAdventure);

module.exports = router;