let express = require('express');
let router = express.Router();
const validate_session = require('./validate_session');

module.exports = function(db) {
  router.post('/api/game', validate_session(db), (req, res) => {
    db.serialize(() => { // todo: ADD SERVER-SIDE VALIDATION
      db.get("SELECT * FROM post WHERE rowid = ?", req.body.id, (err, row) => {
        console.log("-------:GAME START:");
        if (err) {
          console.log(err);
        }
        console.log(row);
        if (row) {
          res.json(row);
        }
        else {
          res.json({success: false});
        }
        console.log("-------:GAME END:");
      })
    });
  });
  return router;
}