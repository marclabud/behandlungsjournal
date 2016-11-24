'use strict';
import {JwtUserService} from '../service/userJwtService';
import {JwtKeyProvider} from '../service/keyProviderService';
import {DbUser} from '../service/model/user';

const User = require('../models/user.model');

module.exports.getAllUsers = (request, response) => {
  User.find({}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.countUsers = (request, response) => {
  User.count((err, count) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(count);
  });
};

module.exports.addUser = (request, response) => {
  let UsertoUpdate = new User(request.body);
  UsertoUpdate.save((err) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(UsertoUpdate);
  });
};

module.exports.findUserbyId = (request, response) => {
  User.findOne({_id: request.params.id}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200).json(docs);
  });
};
// update User by Id
module.exports.updateUser = (request, response) => {
  User.findOneAndUpdate({_id: request.params.id}, request.body, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

module.exports.deleteUser = (request, response) => {
  User.findOneAndRemove({_id: request.params.id}, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

module.exports.loginUser = (request, response) => {
  let email = '';
  email = request.body.email;
  let password = '';
  password = request.body.password;

  if (email === '' || password === '') {
    return response.status(400).send('You must send the username and the password');
  }
  // mongodbquery
  User.find({email: email, password: password}, {
    name: 1,
    email: 1,
    password: 1,
    _id: 0
  }, (err: any, docs: DbUser[]): any => {
    if (err) {
      return console.error(err);
    }
    if (1 === (docs.length)) {
      // genau 1 User wurde gefunden; Token wird zurückgesendet
      let user: DbUser = docs[0];
      let token = getjwtToken(user);
      response.status(201).send({id_token: token});
      console.log('Token', 'Token to response ok');
    } else {    // keinen User mit diesem Passwort gefunden
      return response.status(401).send({message: 'The username or password dont match', email: email});
    }
  });
};

function getjwtToken (user: DbUser): string {
  let keyProvider = new JwtKeyProvider();
  let jwtUserservice = new JwtUserService(keyProvider);
  return jwtUserservice.createJWT(user);
}
