const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

/**
 * @desc    Register a new user
 * @route   POST /api/users/register
 * @access  Public
 */
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, role, grade } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists',
      });
    }

    // Create new user
    const user = await User.create({
      username,
      email,
      password,
      role,
      grade,
    });

    if (user) {
      res.status(201).json({
        success: true,
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          grade: user.grade,
        },
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid user data',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Login user
 * @route   POST /api/users/login
 * @access  Public
 */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        grade: user.grade,
      },
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  Private
 */
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    if (user) {
      res.status(200).json({
        success: true,
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          grade: user.grade,
          progress: user.progress,
        },
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Update user profile
 * @route   PUT /api/users/profile
 * @access  Private
 */
exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('+password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    
    // If user is trying to change password, verify current password
    if (req.body.password && req.body.currentPassword) {
      const isMatch = await user.matchPassword(req.body.currentPassword);
      
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Current password is incorrect',
        });
      }
      
      user.password = req.body.password;
    } else if (req.body.password && !req.body.currentPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current password is required to change password',
      });
    }
    
    // Update other fields
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.grade = req.body.grade || user.grade;
    
    const updatedUser = await user.save();
    
    res.status(200).json({
      success: true,
      user: {
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        role: updatedUser.role,
        grade: updatedUser.grade,
        progress: updatedUser.progress,
      },
      token: generateToken(updatedUser._id),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Update user progress
 * @route   PUT /api/users/progress
 * @access  Private
 */
exports.updateUserProgress = async (req, res) => {
  try {
    const { type, itemId, data } = req.body;
    
    if (!type || !itemId || !data) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }
    
    const user = await User.findById(req.user._id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    
    // Initialize progress arrays if they don't exist
    if (!user.progress) {
      user.progress = {
        quizzes: [],
        wordChallenges: [],
        historicalAdventures: [],
      };
    }
    
    let updatedProgress = {};
    
    switch (type) {
      case 'quiz':
        // Check if quiz already exists in progress
        const quizIndex = user.progress.quizzes.findIndex(
          (q) => q.quizId.toString() === itemId
        );
        
        if (quizIndex > -1) {
          // Update existing progress
          user.progress.quizzes[quizIndex].score = data.score;
          user.progress.quizzes[quizIndex].completedAt = new Date();
        } else {
          // Add new progress
          user.progress.quizzes.push({
            quizId: itemId,
            score: data.score,
            completedAt: new Date(),
          });
        }
        updatedProgress = user.progress.quizzes;
        break;
        
      case 'wordChallenge':
        const wordIndex = user.progress.wordChallenges.findIndex(
          (w) => w.challengeId.toString() === itemId
        );
        
        if (wordIndex > -1) {
          user.progress.wordChallenges[wordIndex].score = data.score;
          user.progress.wordChallenges[wordIndex].completedAt = new Date();
        } else {
          user.progress.wordChallenges.push({
            challengeId: itemId,
            score: data.score,
            completedAt: new Date(),
          });
        }
        updatedProgress = user.progress.wordChallenges;
        break;
        
      case 'historicalAdventure':
        const adventureIndex = user.progress.historicalAdventures.findIndex(
          (h) => h.adventureId.toString() === itemId
        );
        
        if (adventureIndex > -1) {
          user.progress.historicalAdventures[adventureIndex].progress = data.progress;
          user.progress.historicalAdventures[adventureIndex].completedAt = data.completed ? new Date() : null;
        } else {
          user.progress.historicalAdventures.push({
            adventureId: itemId,
            progress: data.progress,
            completedAt: data.completed ? new Date() : null,
          });
        }
        updatedProgress = user.progress.historicalAdventures;
        break;
        
      default:
        return res.status(400).json({
          success: false,
          message: 'Invalid progress type',
        });
    }
    
    await user.save();
    
    res.status(200).json({
      success: true,
      progress: updatedProgress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Get all users (admin only)
 * @route   GET /api/users
 * @access  Private/Admin
 */
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
