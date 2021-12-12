const express = require('express');
const router = express.Router();

module.exports = function(db) {
  router.post('/api/otherprofile', (req, res) => {
    db.serialize(() => {
      db.get("SELECT * FROM user WHERE username = ?", req.body.username, (err, row) => {
        console.debug("----------: OTHER PROFILE START");
        console.debug(row);
        console.debug("----------: OTHER PROFILE END");
        if (row) {
            res.json({
                username: req.body.username,
                description: row.description
            });
        } else {
            res.json({
                success: "false"
            });
        }
      });
    });

  });
  return router;
}