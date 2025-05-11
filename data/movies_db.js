const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Willy4ever!',
    database: process.env.DB_NAME || 'movies_db'
});

connection.connect((err) => {

    if (err) throw err;
    console.log('MySQL server connected!');
});


module.exports = connection;