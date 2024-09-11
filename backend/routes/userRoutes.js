const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Route to get the current user's profile
router.get('/profile', protect, getUserProfile);

// Route to update the current user's profile
router.put('/profile', protect, updateUserProfile);

module.exports = router;