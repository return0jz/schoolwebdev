const express = require('express');
const router = express.Router();

module.exports = function(db) {
  router.post('/api/logout', (req, res) => {
    db.serialize(() => {
      db.get("SELECT * FROM user WHERE username = ?", req.session.username, (err, row) => {
        if (row) {
          db.run("UPDATE user SET session_id = NULL WHERE username = ?", req.session.username);
        }
        req.session.destroy();
        res.end();
      });
    });
  });
  return router;
}