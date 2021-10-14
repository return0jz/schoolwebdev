const express = require('express')
const validate = require('./validate_session')
const router = express.Router();

module.exports = function(db) {
  router.post("/api/validate", validate(db), (req,res) => {
    // Just wrapper for middleware
  });
  return router;
}