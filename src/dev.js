const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const routes = require('./api_routes/api_routes');
const Database = require('./database');

const port = process.env.PORT || 3001

module.exports = function() {
    let db = new Database();

    let app = express();
    routes(app);
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })

    db.destroy();
}