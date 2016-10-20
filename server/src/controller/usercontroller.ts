'use strict';

// Models
const UserModel = require('../models/user.model');

module.exports.getAllUsers = function(req, res) {
  UserModel.find({}, function (err, docs) {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(docs);
  });
};
