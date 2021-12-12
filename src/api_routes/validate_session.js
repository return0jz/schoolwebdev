module.exports =  function(db) {
  return function (req, res, next) {
    console.log("Validating session...");
    db.serialize(() => {
      db.get("SELECT * FROM user WHERE username = ?", req.session.username, (err, row) => {
        console.log("----------: VALIDATION START:")
        console.log(req.session);
        console.log("BROWSER ID" + req.session.id);
        console.log("SERVER ID" + row?.session_id);
        if (row && (row?.session_id == req.session.id)) {
          console.log("VALIDATION success");
          next();
        } else {
          console.log("VALIDATION fail");
          req.session?.destroy();
          res.json({validateFailed: true});
        }
        console.log("----------: VALIDATION END:");
      }); 
    })
  }
}