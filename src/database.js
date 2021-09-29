let sqlite3 = require('sqlite3').verbose()

class Database {
    constructor() {
        this.db = new sqlite3.Database(':memory:');
        this.create_users_table();
        this.create_posts_table();
    }
    destroy() {
        this.db.close();
    }
    create_users_table() {
        this.db.run(`
            CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                username varchar(20) NOT NULL,
                password varchar(30) NOT NULL,
                birth DATE NOT NULL
            )
        `);
    }
    create_posts_table() {
        this.db.run(`
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
}

module.exports = Database;