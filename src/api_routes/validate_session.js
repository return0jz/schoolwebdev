module.exports =  function(db) {
  console.log("Validating session...");
  return (req, res, next) => {
    db.serialize(() => {
      db.get("SELECT * FROM user WHERE username = ?", req.session.username, (err, row) => {
        console.log(req.session);
        console.log("BROWSER ID" + req.session.id);
        console.log("SERVER ID" + row?.session_id);
        if (row && (row?.session_id == req.session.id)) {
            next();
        } else {
            req.session?.destroy();
            res.json({validateFailed: true});
        }
      }); 
    })
  }
}