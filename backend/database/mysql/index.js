var mysql = require('mysql2');
// const API_URL = 'http://127.0.0.1:3000/classes';

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: '',
  database: 'chat',
});

dbConnection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to MySQL Database');
  }
});

module.exports = dbConnection;

