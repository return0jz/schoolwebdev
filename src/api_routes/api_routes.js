const express = require('express');
const signin = require('./signin');
const signup = require('./signup');
const logout = require('./logout');
const validate  = require('./validate');
const profile = require('./profile');
const user_desc = require('./description');
const creategame = require('./create_game');
const getgame = require('./getgame');
const otherprofile = require('./otherprofile');
let router = express.Router();

module.exports = function(db) {
    router.use(signup(db));
    router.use(signin(db));
    router.use(logout(db));
    router.use(validate(db));
    router.use(profile(db));
    router.use(logout(db));
    router.use(user_desc(db));
    router.use(creategame(db));
    router.use(getgame(db));
    router.use(otherprofile(db));
    return router;
};