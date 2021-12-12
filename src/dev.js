const express = require('express');
const session = require('express-session');
const routes = require('./api_routes/api_routes');
const sqlite3 = require('sqlite3').verbose();

const port = process.env.PORT || 3001

module.exports = function() {
  let db = new sqlite3.Database(":memory:"); // dev
  db.run(`
    CREATE TABLE IF NOT EXISTS user (\
      username VARCHAR(20) NOT NULL,\
      password VARCHAR(30) NOT NULL,\
      description VARCHAR(160),\
      birth DATE NOT NULL,\
      session_id VARCHAR(36),\
      PRIMARY KEY (username)\
    )
  `)
    .run(`
    CREATE TABLE IF NOT EXISTS post (\
      title VARCHAR(60) NOT NULL,\
      description VARCHAR(160),\
      birth DATE NOT NULL,\
      username VARCHAR(20) NOT NULL,\
      game VARCHAR(5000),\
      FOREIGN KEY (username) REFERENCES user(username)\
    )
  `);

  let app = express();
  app.use(session({
      secret: process.env.secret || "secret", 
      resave: false,
      saveUninitialized: false
  }));
  app.use(express.json());
  app.use(routes(db));
  app.listen(port, () => {
      console.log(`Listening on port ${port}`)
  });
}