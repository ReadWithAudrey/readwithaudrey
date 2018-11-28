const express = require('express');

const router = express.Router();

// Import controllers
const formPart1 = require('./formPart1');
const formPart3 = require('./formPart3');

const cron = () => {
  console.log('I just got poked by the cron-job');
};
// POST routes
router.post('/formPart1', formPart1.post);
router.post('/formPart3', formPart3.post);
router.post('/cronjob', cron);

module.exports = router;
