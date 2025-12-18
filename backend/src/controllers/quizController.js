const Quiz = require('../models/Quiz');

/**
 * @desc    Get all quizzes
 * @route   GET /api/quizzes
 * @access  Public
 */
exports.getQuizzes = async (req, res) => {
  try {
    // Build query
    const queryObj = { ...req.query };
    
    // Fields to exclude from filtering
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach(field => delete queryObj[field]);
    
    let query = Quiz.find(queryObj);
    
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
    const total = await Quiz.countDocuments(queryObj);
    
    query = query.skip(startIndex).limit(limit);
    
    // Execute query
    const quizzes = await query;
    
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
      count: quizzes.length,
      pagination,
      data: quizzes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get a single quiz
 * @route   GET /api/quizzes/:id
 * @access  Public
 */
exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Create a new quiz
 * @route   POST /api/quizzes
 * @access  Private/Admin
 */
exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    
    res.status(201).json({
      success: true,
      data: quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Update a quiz
 * @route   PUT /api/quizzes/:id
 * @access  Private/Admin
 */
exports.updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Delete a quiz
 * @route   DELETE /api/quizzes/:id
 * @access  Private/Admin
 */
exports.deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }
    
    await quiz.deleteOne();
    
    res.status(200).json({
      success: true,
      message: 'Quiz deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get quizzes by subject
 * @route   GET /api/quizzes/subject/:subject
 * @access  Public
 */
exports.getQuizzesBySubject = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ 
      subject: req.params.subject,
      isActive: true 
    });
    
    res.status(200).json({
      success: true,
      count: quizzes.length,
      data: quizzes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get quizzes by grade level
 * @route   GET /api/quizzes/grade/:gradeLevel
 * @access  Public
 */
exports.getQuizzesByGradeLevel = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ 
      gradeLevel: req.params.gradeLevel,
      isActive: true 
    });
    
    res.status(200).json({
      success: true,
      count: quizzes.length,
      data: quizzes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
