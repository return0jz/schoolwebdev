const express = require('express');
let router = express.Router();
let signup = require('./signup')

module.exports = function(db) {
    router.use(signup(db));
    return router;
};