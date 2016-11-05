'use strict';

exports.addUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  **/
  // no response value expected for this operation
  res.end();
}

exports.countUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "count" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAllUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "password" : "aeiou",
  "name" : "aeiou",
  "_id" : "aeiou",
  "email" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserbyId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "password" : "aeiou",
  "name" : "aeiou",
  "_id" : "aeiou",
  "email" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.loginUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  **/
    var examples = {};
  examples['application/json'] = {
  "token" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.logoutUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  res.end();
}

exports.updateUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (String)
  * body (User)
  **/
  // no response value expected for this operation
  res.end();
}

