const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const health = require('./health');
const metrics = require('./metrics');

const app = express();
app.use(helmet());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.json({ message: 'GAS Project', version: process.env.APP_VERSION });
});

app.use('/health', health);
app.use('/metrics', metrics);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
