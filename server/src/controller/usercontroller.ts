'use strict';
import * as _ from 'lodash';

const User = require ('../models/user.model');

module.exports.getAllUsers = (req, res) => {
  User.find({}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(docs);
  });
};

module.exports.countUsers = (req, res) => {
  User.count((err, count) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(count);
  });
};

module.exports.addUser = (req, res) => {
  let UsertoUpdate = new User(req.body);
  UsertoUpdate.save((err) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(UsertoUpdate);
  });
};

module.exports.findUserbyId = (req, res) => {
  User.findOne({_id: req.params.id}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    res.sendStatus(200).json(docs);
  });
};
// update User by Id
module.exports.updateUser = (req, res) => {
  User.findOneAndUpdate({_id: req.params.id}, req.body, (err) => {
    if (err) {
      return console.error(err);
    }
    res.sendStatus(200);
  });
};

module.exports.deleteUser = (req, res) => {
  User.findOneAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      return console.error(err);
    }
    res.sendStatus(200);
  });
};

module.exports.loginUser = (res, req) => {
  let email: string = req.body.email;
  let password: string = req.body.password;

  if (email === '' || password === '') {
    return res.status(400).send('You must send the username and the password');
  }
  // mongodbquery
  User.find({email: email, password: password}, (err: any, docs: any): any => {
    if (err) {
      return console.error(err);
    }
    if (!(_.isEmpty(docs))) {
      // 1 User wurde gefunden; Token wird zurückgesendet
      // ToDo: Check mit count, ob es mehr als einen User gibt.
      let token = '123';
      res.status(201).send({id_token: token});
      console.log('Token', 'Token to response ok');
    } else {    // keinen User mit diesem Passwort gefunden
      return res.status(401).send({message: 'The username or password dont match', email: email});
    }
  });
};
