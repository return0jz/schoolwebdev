const express = require('express');
const router = express.Router();
const validate_session = require('./validate_session');

module.exports = function(db) {
  router.post('/api/user_desc', validate_session, (req, res) => {
    db.serialize(() => {
      db.run('UPDATE user SET description = ? WHERE username = ?', [req.body?.data, req.session?.username]);
      res.end();
    })
  });
  return router;
}