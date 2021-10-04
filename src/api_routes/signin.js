let express = require('express');
let router = express.Router()

module.exports = function(db) {
  router.post('/api/signin', (req, res) => {
    db.get(`SELECT * FROM user WHERE username = ?`, req.body.username, (err, row) => {
      
    });
  });
  return router;
};