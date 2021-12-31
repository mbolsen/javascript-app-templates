//This file will be the middle between the frontend api call to the database
var models = require("../models");

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        res.status(404).end(err);
      } else {
        res.status(201).end(JSON.stringify(results));
      }
    });
  }, // a function which handles a get request for all messages

  post: function (req, res) {
    models.messages.create(req.body, function (err) {
      if (err) {
        res.status(404).end(err);
      } else {
        res.status(201).end();
      }
    });
  }, // a function which handles posting a message to the database
};
