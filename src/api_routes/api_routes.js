const express = require('express');
const signin = require('./signin');
const signup = require('./signup');
const profile = require('./profile');
const validate  = require('./validate');
let router = express.Router();

module.exports = function(db) {
    router.use(signup(db));
    router.use(signin(db));
    router.use(profile(db));
    router.use(validate(db));
    return router;
};