module.exports =  function(db) {
  return (req, res, next) => {
    db.serialize(() => {
      db.get("SELECT * FROM user WHERE username = ?", req.session.username, (err, row) => {
        if (row && (row.session_id == req.session.id)) {
          next();
        } else {
          req.session.destroy();
          res.json({validateFailed: true});
        }
      }); 
    })
  }
}