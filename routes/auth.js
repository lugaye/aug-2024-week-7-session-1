const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

// configure routes

// User registration
router.post('/register', registerUser);

module.exports = router;
