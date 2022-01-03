//import postgres connection
//!!!---remember to look up safeety measures for injection attacks---!!!  The examples here are safe, but still be aware!
const postgres = require('../../database/postgres')

//---INSERT---
const insertPostgres = () => {
  //THIS IS A SAMPLE INSERT QUERY, CHANGE TO WHAT IS NEEDED
  db.query(
      'INSERT INTO users(id, username, password, firstname, lastname, email, thumbnail_url) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6) RETURNING id;',
      [req.body.username,
        hashedPassword,
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.thumbnail_url],
      (err, data) => {
        if (err) {
          throw err;
        } else {
          //this res.send line should be left in the controller or route
          res.send('user created');
        }
      },
    );
}

//---READ---
const readPostgres = () => {
  //THIS IS A SAMPLE INSERT QUERY, CHANGE TO WHAT IS NEEDED
  //REMINDER! Don'e be afraid to async and await if necessary
  const data = db.query('SELECT * FROM users WHERE username = $1;', [req.body.username]);

  return data;
}

//---UPDATE---


//---DELETE---