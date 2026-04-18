import db from './connection.js'
import { hashPassword } from '../utils/passwordHashing.js';

const deleteMode = process.argv.includes('--delete');
const testMode = process.argv.includes('--test');

if (deleteMode) {
    await db.exec(`DROP TABLE IF EXISTS users`);
}

// DDL
await db.exec(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email VARCHAR(255) UNIQUE NOT NULL,
        hashed_password VARCHAR(255) NOT NULL,
        is_admin TINYINT(1) NOT NULL
    );
`);

// TODO make sure password is hashed!!!

// seeding
if (deleteMode) {
    const adminPassword = await hashPassword('admin123');
    const userPassword = await hashPassword('user123');
    await db.run(`INSERT INTO users (id, email, hashed_password, is_admin) VALUES (?, ?, ?, ?)`, [1, 'test@admin.com', adminPassword, 1]);
    await db.run(`INSERT INTO users (id, email, hashed_password, is_admin) VALUES (?, ?, ?, ?)`, [2, 'test@user.com', userPassword, 0]);
}
if (testMode) {
    const users = await db.all('SELECT * FROM users');
    console.log("users table: ", users);
}