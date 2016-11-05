'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.addUser = function addUser (req, res, next) {
  User.addUser(req.swagger.params, res, next);
};

module.exports.countUsers = function countUsers (req, res, next) {
  User.countUsers(req.swagger.params, res, next);
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  User.deleteUser(req.swagger.params, res, next);
};

module.exports.getAllUsers = function getAllUsers (req, res, next) {
  User.getAllUsers(req.swagger.params, res, next);
};

module.exports.getUserbyId = function getUserbyId (req, res, next) {
  User.getUserbyId(req.swagger.params, res, next);
};

module.exports.loginUser = function loginUser (req, res, next) {
  User.loginUser(req.swagger.params, res, next);
};

module.exports.logoutUser = function logoutUser (req, res, next) {
  User.logoutUser(req.swagger.params, res, next);
};

module.exports.updateUser = function updateUser (req, res, next) {
  User.updateUser(req.swagger.params, res, next);
};
