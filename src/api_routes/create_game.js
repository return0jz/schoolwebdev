let express = require('express');
let router = express.Router();
const validate_session = require('./validate_session');

module.exports = function(db) {
  router.post('/api/creategame', validate_session(db), (req, res) => {
    db.serialize(() => { // todo: ADD SERVER-SIDE VALIDATION
      db.run("INSERT INTO post(title, description, birth, username, game) VALUES(?, ?, ?, ?, ?);", [req.body.title, req.body.description, new Date().toISOString().slice(0,10), req.session.username, req.body.game], function(err) {
        console.log("---------:CREATING GAME START:");
        if (err) {
          console.log(err);
        }
        console.log(`Title: ${req.body.title}`);
        console.log(`Description: ${req.body.description}`);
        console.log(`Game: ${req.body.game}`);
        console.log(`Username: ${req.session.username}`);
        db.get("SELECT last_insert_rowid() as id", function (err, row) {
          if (err) {
            console.log(err);
          }
          console.log(`Last row: ${row}`)
          db.get("SELECT * FROM post", (err, row) => {
            if (err) {
              console.log(err);
            }
            console.log(row);
            console.log("---------:CREATING GAME END:");
          });
          res.json({id: row['id']});
        });
      });
    });
  });
  return router;
}