let express = require('express');
let router = express.Router()

module.exports = function(db) {
  router.post('/api/signin', (req, res) => {
    db.serialize(() => {
      db.get(`SELECT * FROM user WHERE username = ?`, req.body.username, (err, row) => {
        console.log(req.body); // DEBUG
        if ( row && (row.username == req.body.username && row.password == req.body.password)) {
          req.session.username = req.body.username;
          req.session.save();

          res.json({error: "false"});
          db.run("UPDATE user SET session_id = ? WHERE username = ?", req.session.id, req.body.username);
        } else {
          res.json({error: "true"});
        }
      });
    });
  });
  return router;
};