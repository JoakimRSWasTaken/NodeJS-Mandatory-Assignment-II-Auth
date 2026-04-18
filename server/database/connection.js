// Run this file from the root folder with node database/connection.js
// Keep it in here to have it in the gitignore

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const connection = await open({
    filename: 'users.db',
    driver: sqlite3.Database
});

export default connection;