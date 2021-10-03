const express = require('express');
const session = require('express-session');
const routes = require('./api_routes/api_routes');
const Database = require('./database');

const port = process.env.PORT || 3001

module.exports = function() {
    let db = new Database();

    let app = express();
    app.use(session({
        secret: process.env.secret || "secret", // I guess its salt for cookie hash
        resave: false,
        saveUninitialized: false
    }));
    app.use(express.json());
    app.use(routes(db));
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })

    db.destroy();
}