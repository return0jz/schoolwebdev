const express = require('express');
const router = express.Router();

module.exports = function(db) {
  router.post('/api/profile', (req, res) => {
      res.json({username: req.session.username});
  });
  return router;
}