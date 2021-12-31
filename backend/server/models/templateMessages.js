//This file will interact with the database.
//This file is set up for MySQL
var db = require('../../database/mysql');

module.exports = {
  getAll: function (callback) {
    var sql = 'SELECT users.username, messages.text, messages.roomname FROM users INNER JOIN messages WHERE users.id = messages.userid';

    db.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
      }
      console.log('Got our messages! ');
      callback(null, results);
    });
  }, // a function which produces all the messages

  create: function (message, callback) {

    var usersql = `INSERT IGNORE INTO users (username) VALUES ('${message.username}')`;
    db.query(usersql, function(err, result) {
      if (err) {
        throw err;
      }
      console.log('User inserted');
    });

    var sql = `INSERT INTO messages (userid, text, roomname) VALUES ((SELECT id FROM users WHERE username = '${message.username}'), '${message.text}', '${message.roomname}')`;
    db.query(sql, function(err, result) {
      if (err) {
        throw err;
      }
      console.log('one record inserted.....yahoooooo');
      callback();
    });
  } // a function which can be used to insert a message into the database
};