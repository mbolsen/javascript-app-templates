//start mysql in a terminal -> mysql -u <username> -p <password>
//if you haven't already, then run the schema file.

//need this line to use the process.env
require('dotenv').config();
var mysql = require('mysql2');
// const API_URL = 'http://127.0.0.1:3000/classes';

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
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

