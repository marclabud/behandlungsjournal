'use strict';
var express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var router = express.Router();
var _    = require('lodash');

// Models
const User = require('../models/user.model.js');

// APIs
// select all users
router.get('/users', function (req, res) {
  User.find({}, function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  });
});

// count all users
router.get('/users/count', function (req, res) {
  User.count(function (err, count) {
    if (err) return console.error(err);
    res.json(count);
  });
});

// create new user
router.post('/user', function (req, res) {
  var obj = new User(req.body);
  obj.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find user by id
router.get('/user/:id', function (req, res) {
  User.findOne({_id: req.params.id}, function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  })
});

// update user by id
router.put('/user/:id', function (req, res) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete user by id
router.delete('/user/:id', function (req, res) {
  User.findOneAndRemove({_id: req.params.id}, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// user login
router.post('/user/login', function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  if (email === "" || !password === "") {
    return res.status(400).send("You must send the username and the password");
  }
  //mongodbquery
  User.find({email: email, password: password}, function (err, docs) {
    if (err) return console.error(err);
    if (!(_.isEmpty(docs))) {
      //1 User wurde gefunden; Token wird zurückgesendet
      // ToDo: Check mit count, ob es mehr als einen User gibt.
      let token = '123';
      res.status(201).send({id_token: token});
      console.log('Token', 'Token to response ok');
    }
    else {    //keinen User mit diesem Passwort gefunden
      return res.status(401).send({message: "The username or password don't match", email: email});
    }
  })
});

// // all other routes are handled by Angular
router.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../dist/index.html'));
});

module.exports = router;
