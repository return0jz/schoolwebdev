const express = require('express');
const router = express.Router();

module.exports = function(db) {
  router.post('/api/profile', (req, res) => {
    db.serialize(() => {
      db.get("SELECT * FROM user WHERE username = ?", req.session.username, (err, row) => {
        db.all("SELECT * FROM post WHERE username = ?", req.session.username, (err, rows) => {
          console.debug("----------: PROFILE START");
          console.debug(row);
          console.debug(rows);
          console.debug("----------: PROFILE END");
          res.json({
              username: req.session.username,
              description: row?.description,
              games: rows
          });
        })
      });
    });

  });
  return router;
}