const express = require('express');

const router = express.Router();

// Import controllers
const formPart1 = require('./formPart1');
const formPart3 = require('./formPart3');
const cron = require('./cron-job.js');

// POST routes
router.post('/formPart1', formPart1.post);
router.post('/formPart3', formPart3.post);
router.post('/cronjob', cron.post);

module.exports = router;
