let express = require('express');
let router = express.Router();

module.exports = function(db) { // TODO: Add promises to sqlite3 because code looking nasty with callback hell
  router.post("/api/signup", (req, res) => {
    req.body.username = req.body.username.trim();
    req.body.password = req.body.password.trim();
    if ((req.body.username?.length >= 3) // dank validation
        && (req.body.username?.length <= 20) 
        && (req.body.password?.length >= 4)
        && (req.body.password?.length<= 30)
        && (/\s/.test(req.body.username) === false)
        && (/\s/.test(req.body.password) === false)
        && (/^[a-zA-Z0-9_]*$/.test(req.body.username))
        && (/^[a-zA-Z0-9_]*$/.test(req.body.password))
      ) {
      db.serialize(() => {
        db.get('SELECT * FROM user WHERE username = ?', req.body.username, (err, row) => {
          let existsStr = row?.username;
          if (existsStr == req.body.username) {
            res.json({
              type: 'exists' // gg too lazy to use HTTP status codes
            });
          } 
          else {
            db.serialize(() => {
              db.run('INSERT INTO user(username, password, birth) VALUES(?, ?, ?)', [req.body.username, req.body.password, new Date().toISOString().slice(0,10)])
            })
            res.json({
              type: 'success'
            })
          }
        })
      })
    }
    else {
      res.json({
        type: 'serverval'
      });
    }
  });
  return router;
};