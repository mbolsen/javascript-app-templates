//This is a basic postgres setup
const { Pool } = require('pg')
require('dotenv').config();

const Pool = new Pool({
  user: process.env.USERNAME,
  //host will change depending on where you are deploying it
  host: 'localhost',
  database: 'templatedb',
  password: process.env.PASSWORD,
  port: 5432 // Default port
});

pool.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to PostgresQL');
  }
});

module.exports = pool;