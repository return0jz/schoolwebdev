let express = require('express');
let router = express.Router();

module.exports = function(db) {
  router.post("/api/signup", (req, res) => {
    if ((req.body.username?.length >= 3) // dank validation
        && (req.body.username?.length <= 20) 
        && (req.body.password?.length >= 4)
        && (req.body.password?.length<= 30)
        && (/\s/.test(req.body.username?.trim()) === false)
        && (/\s/.test(req.body.username?.trim()) === false)
        && (/^[a-zA-Z0-9_]*$/.test(req.body.username?.trim()))
        && (/^[a-zA-Z0-9_]*$/.test(req.body.password?.trim()))
      ) {
      if (db.userExists(req.body.username)) {
        res.json({
          success: false,
          message: "That username already exists."
        });
      } else {

        res.json({
          success: true,
          message: "Successfully created account."
        })
      }
    } else {
      res.status(403);
      res.json({
        success: false,
        message: "Server-side validation failed."
      });
    }
  });
  return router;
};