//This file will interact with the database.
//This file is set up for MySQL

//Remember to protect against SQL injections
//See documentation on https://www.npmjs.com/package/mysql2 for more information.
var db = require('../../database/mysql');

module.exports = {
  getAll: function (callback) {
    var sql = 'SELECT users.username, messages.text, messages.roomname FROM users INNER JOIN messages WHERE users.id = ?';

    db.query(sql,
      [messages.userid],
      (err, results) => {
      if (err) {
        callback(err, null);
      }
      console.log('Got our messages! ');
      callback(null, results);
    });
  }, // a function which produces all the messages

  create: function (message, callback) {
    //this is not a safe way to query, someone could make their username 'username; DROP database;' and it would drop the db.
    // var usersql = `INSERT IGNORE INTO users (username) VALUES ('${message.username}')`;
    //this is better:
    var usersql = `INSERT IGNORE INTO users (username) VALUES (?)`;
    db.query(usersql,
      [message.username],
      function (err, result, fields) {
      if (err) {
        throw err;
      }
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    });

    var sql = `INSERT INTO messages (userid, text, roomname) VALUES ((SELECT id FROM users WHERE username = ?), ?, ?)`;
    db.query(sql,
      [message.username, message.text, message.roomname],
      function (err, result) {
      if (err) {
        throw err;
      }
      console.log('one record inserted.....yahoooooo');
      callback();
    });
  } // a function which can be used to insert a message into the database
};