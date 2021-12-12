const express = require('express');
const router = express.Router();
const validate_session = require('./validate_session');

module.exports = function(db) {
  router.post('/api/user_desc', validate_session(db), (req, res) => {
    console.log("----------: DESCRIPTION START");
    console.log(req.session?.username);
    console.log(req.body?.description);
    console.log(`is String: ${(typeof req.body?.description == 'string')}`);
    db.serialize(() => {
      if ((typeof req.body?.description == 'string') &&  req.body?.description?.length <= 160) {
        db.run('UPDATE user SET description = ? WHERE username = ?', [req.body?.description, req.session?.username]);
        console.log("/api/user_desc success");
        res.json({sucess: true});
      } else {
        console.log("/api/user_desc fail");
        res.json({success: false});
      }
      console.log("----------: DESCRIPTION END");
    });
  });
  return router;
}