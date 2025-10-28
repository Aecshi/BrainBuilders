const WordChallenge = require('../models/WordChallenge');

/**
 * @desc    Get all word challenges
 * @route   GET /api/word-challenges
 * @access  Public
 */
exports.getWordChallenges = async (req, res) => {
  try {
    // Build query
    const queryObj = { ...req.query };
    
    // Fields to exclude from filtering
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach(field => delete queryObj[field]);
    
    let query = WordChallenge.find(queryObj);
    
    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }
    
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await WordChallenge.countDocuments(queryObj);
    
    query = query.skip(startIndex).limit(limit);
    
    // Execute query
    const wordChallenges = await query;
    
    // Pagination result
    const pagination = {};
    
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
    
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }
    
    res.status(200).json({
      success: true,
      count: wordChallenges.length,
      pagination,
      data: wordChallenges
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get a single word challenge
 * @route   GET /api/word-challenges/:id
 * @access  Public
 */
exports.getWordChallenge = async (req, res) => {
  try {
    const wordChallenge = await WordChallenge.findById(req.params.id);
    
    if (!wordChallenge) {
      return res.status(404).json({
        success: false,
        message: 'Word challenge not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: wordChallenge
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Create a new word challenge
 * @route   POST /api/word-challenges
 * @access  Private/Admin
 */
exports.createWordChallenge = async (req, res) => {
  try {
    const wordChallenge = await WordChallenge.create(req.body);
    
    res.status(201).json({
      success: true,
      data: wordChallenge
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Update a word challenge
 * @route   PUT /api/word-challenges/:id
 * @access  Private/Admin
 */
exports.updateWordChallenge = async (req, res) => {
  try {
    const wordChallenge = await WordChallenge.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!wordChallenge) {
      return res.status(404).json({
        success: false,
        message: 'Word challenge not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: wordChallenge
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Delete a word challenge
 * @route   DELETE /api/word-challenges/:id
 * @access  Private/Admin
 */
exports.deleteWordChallenge = async (req, res) => {
  try {
    const wordChallenge = await WordChallenge.findById(req.params.id);
    
    if (!wordChallenge) {
      return res.status(404).json({
        success: false,
        message: 'Word challenge not found'
      });
    }
    
    await wordChallenge.deleteOne();
    
    res.status(200).json({
      success: true,
      message: 'Word challenge deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get word challenges by type
 * @route   GET /api/word-challenges/type/:type
 * @access  Public
 */
exports.getWordChallengesByType = async (req, res) => {
  try {
    const wordChallenges = await WordChallenge.find({ 
      type: req.params.type,
      isActive: true 
    });
    
    res.status(200).json({
      success: true,
      count: wordChallenges.length,
      data: wordChallenges
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get word challenges by grade level
 * @route   GET /api/word-challenges/grade/:gradeLevel
 * @access  Public
 */
exports.getWordChallengesByGradeLevel = async (req, res) => {
  try {
    const wordChallenges = await WordChallenge.find({ 
      gradeLevel: req.params.gradeLevel,
      isActive: true 
    });
    
    res.status(200).json({
      success: true,
      count: wordChallenges.length,
      data: wordChallenges
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
