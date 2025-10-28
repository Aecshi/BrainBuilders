const HistoricalAdventure = require('../models/HistoricalAdventure');

/**
 * @desc    Get all historical adventures
 * @route   GET /api/historical-adventures
 * @access  Public
 */
exports.getHistoricalAdventures = async (req, res) => {
  try {
    // Build query
    const queryObj = { ...req.query };
    
    // Fields to exclude from filtering
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach(field => delete queryObj[field]);
    
    let query = HistoricalAdventure.find(queryObj);
    
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
    const total = await HistoricalAdventure.countDocuments(queryObj);
    
    query = query.skip(startIndex).limit(limit);
    
    // Execute query
    const historicalAdventures = await query;
    
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
      count: historicalAdventures.length,
      pagination,
      data: historicalAdventures
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get a single historical adventure
 * @route   GET /api/historical-adventures/:id
 * @access  Public
 */
exports.getHistoricalAdventure = async (req, res) => {
  try {
    const historicalAdventure = await HistoricalAdventure.findById(req.params.id);
    
    if (!historicalAdventure) {
      return res.status(404).json({
        success: false,
        message: 'Historical adventure not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: historicalAdventure
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Create a new historical adventure
 * @route   POST /api/historical-adventures
 * @access  Private/Admin
 */
exports.createHistoricalAdventure = async (req, res) => {
  try {
    const historicalAdventure = await HistoricalAdventure.create(req.body);
    
    res.status(201).json({
      success: true,
      data: historicalAdventure
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Update a historical adventure
 * @route   PUT /api/historical-adventures/:id
 * @access  Private/Admin
 */
exports.updateHistoricalAdventure = async (req, res) => {
  try {
    const historicalAdventure = await HistoricalAdventure.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!historicalAdventure) {
      return res.status(404).json({
        success: false,
        message: 'Historical adventure not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: historicalAdventure
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Delete a historical adventure
 * @route   DELETE /api/historical-adventures/:id
 * @access  Private/Admin
 */
exports.deleteHistoricalAdventure = async (req, res) => {
  try {
    const historicalAdventure = await HistoricalAdventure.findById(req.params.id);
    
    if (!historicalAdventure) {
      return res.status(404).json({
        success: false,
        message: 'Historical adventure not found'
      });
    }
    
    await historicalAdventure.deleteOne();
    
    res.status(200).json({
      success: true,
      message: 'Historical adventure deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get historical adventures by era
 * @route   GET /api/historical-adventures/era/:era
 * @access  Public
 */
exports.getHistoricalAdventuresByEra = async (req, res) => {
  try {
    const historicalAdventures = await HistoricalAdventure.find({ 
      era: req.params.era,
      isActive: true 
    });
    
    res.status(200).json({
      success: true,
      count: historicalAdventures.length,
      data: historicalAdventures
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * @desc    Get historical adventures by grade level
 * @route   GET /api/historical-adventures/grade/:gradeLevel
 * @access  Public
 */
exports.getHistoricalAdventuresByGradeLevel = async (req, res) => {
  try {
    const historicalAdventures = await HistoricalAdventure.find({ 
      gradeLevel: req.params.gradeLevel,
      isActive: true 
    });
    
    res.status(200).json({
      success: true,
      count: historicalAdventures.length,
      data: historicalAdventures
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
