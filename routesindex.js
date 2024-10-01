const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to my web app!');
});

module.exports = router;
