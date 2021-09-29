const express = require('express');
const path = require('path');
const routes = require('./api_routes/api_routes')
const sqlite3 = require('sqlite3').verbose();

const port = process.env.PORT || 3001

function dbInit(db) {

}

module.exports = function() {
    let db = new sqlite3.Database(':memory:');
    dbInit(db);
    let app = express();

    routes(app);
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
    db.close();
}