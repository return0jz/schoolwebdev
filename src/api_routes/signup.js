let express = require('express');
let router = express.Router();

module.exports = function(db) {
  router.get("/api/signup", (req, res) => {
    res.json({
      dank: 9,
      pretty: 5
    });
    console.log("YES");
  });
  return router;
};