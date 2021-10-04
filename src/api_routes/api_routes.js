const express = require('express');
const signin = require('./signin');
const signup = require('./signup')
let router = express.Router();

module.exports = function(db) {
    router.use(signup(db));
    router.use(signin(db));
    return router;
};