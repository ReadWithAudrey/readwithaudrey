const express = require('express');

const router = express.Router();

// Import controllers
const formPart1 = require('./formPart1');

// POST routes
router.post('/formPart1', formPart1.post);

module.exports = router;
