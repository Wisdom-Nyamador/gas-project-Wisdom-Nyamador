const express = require('express');
const client = require('prom-client');
const router = express.Router();

// Collect default metrics every 5s
client.collectDefaultMetrics({ timeout: 5000 });

router.get('/', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

module.exports = router;
