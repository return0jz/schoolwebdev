const express = require('express');
const path = require('path');
const routes = require('./api_routes/api_routes')
const sqlite3 = require('sqlite3').verbose();

const port = process.env.PORT || 3001

function dbInit(db) {
    db.run(`
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        username varchar(20) NOT NULL,
        password varchar(30) NOT NULL,
        birth DATE NOT NULL
    )
    `);
    db.run(`
    CREATE TABLE IF NOT EXISTS post (
        birth DATETIME NOT NULL,
        id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        post_data varchar(1024) NOT NULL,
        title varchar(50) NOT NULL,
        description varchar(280) NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES user(user_id)
    )
    `)
}

module.exports = function() {
    let db = new sqlite3.Database(':memory:');
    dbInit(db);

    let app = express();
    routes(app);
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })

    db.close();
}