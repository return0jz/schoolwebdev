const express = require('express');
const signin = require('./signin');
const signup = require('./signup');
const logout = require('./logout');
const validate  = require('./validate');
const profile = require('./profile');
const user_desc = require('./description');
let router = express.Router();

module.exports = function(db) {
    router.use(signup(db));
    router.use(signin(db));
    router.use(logout(db));
    router.use(validate(db));
    router.use(profile(db));
    router.use(logout(db));
    router.use(user_desc(db));
    return router;
};