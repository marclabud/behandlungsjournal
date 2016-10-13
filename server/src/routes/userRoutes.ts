'use strict';
import * as express from "express";
import * as _ from "lodash";
const userRouter = express.Router();

// Models
const User = require('../models/user.model.ts');

// APIs
// select all users
userRouter.get('/users', function (req, res) {
  User.find({}, function (err, docs) {
    if (err) return console.error(err);
    res.status(200).json(docs);
  });
});

// count all users
userRouter.get('/users/count', function (req, res) {
  User.count(function (err, count) {
    if (err) return console.error(err);
    res.status(200).json(count);
  });
});

// create new user
userRouter.post('/user', function (req, res) {
  let obj = new User(req.body);
  obj.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find user by id
userRouter.get('/user/:id', function (req, res) {
  User.findOne({_id: req.params.id}, function (err, docs) {
    if (err) return console.error(err);
    res.status(200).json(docs);
  })
});

// update user by id
userRouter.put('/user/:id', function (req, res) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete user by id
userRouter.delete('/user/:id', function (req, res) {
  User.findOneAndRemove({_id: req.params.id}, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// user login
userRouter.post('/user/login', function (req, res) {
  // ToDo: Fehlerbehandlung, falls im Body ein Array zurückkommt und kein String.
  let email: string = req.body.email;
  let password: string = req.body.password;

  if (email === "" || password === "") {
    return res.status(400).send("You must send the username and the password");
  }
  //mongodbquery
  User.find({email: email, password: password}, function (err: any, docs:any):any {
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
export=userRouter;