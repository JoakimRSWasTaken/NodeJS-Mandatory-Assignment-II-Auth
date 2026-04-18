import db from './connection.js'

const deleteMode = process.argv.includes('--delete');

if (deleteMode) {
    await db.exec(`DROP TABLE IF EXISTS users`);
}

// DDL
await db.exec(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        is_admin TINYINT(1) NOT NULL
    );
`);

// TODO make sure password is hashed!!!

// seeding
if (deleteMode) {
    await db.run(`INSERT INTO users (id, email, password) VALUES (1, 'test@admin.com', 'password', 1)`);
    await db.run(`INSERT INTO users (id, email, password) VALUES (1, 'test@user.com', 'password', 0)`);
}