const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'pass',
    version: process.env.APP_VERSION || '0.1.0',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
