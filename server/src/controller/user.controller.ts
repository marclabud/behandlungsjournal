'use strict';
import {JwtUserService} from '../service/userJwtService';
import {JwtKeyProvider} from '../service/keyProviderService';
import {User} from '../service/model/user';
import {Request} from 'express-serve-static-core';

const UserCollection = require('../models/user.model');

module.exports.getAllUsers = (request, response) => {
  let user = whoIsUser(request);
  console.log ('getallusers: usernamefromtoken', user);
  UserCollection.find({}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.countUsers = (request, response) => {
  UserCollection.count((err, count) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(count);
  });
};

module.exports.addUser = (request, response) => {
  let UsertoUpdate = new UserCollection(request.body);
  UsertoUpdate.save((err) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(UsertoUpdate);
  });
};

module.exports.findUserbyId = (request, response) => {
  UserCollection.findOne({_id: request.params.id}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200).json(docs);
  });
};
// update User by Id
module.exports.updateUser = (request, response) => {
  UserCollection.findOneAndUpdate({_id: request.params.id}, request.body, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

module.exports.deleteUser = (request, response) => {
  UserCollection.findOneAndRemove({_id: request.params.id}, (err) => {
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
  UserCollection.find({email: email, password: password}, {password: 0, _id: 0},
    (err: any, docs: User[]): any => {
      if (err) {
        return console.error(err);
      }

    if (1 === (docs.length)) {
      // genau 1 User wurde gefunden; Token wird zurückgesendet
      let user: User = docs[0];
      let token = getjwtToken(user);
      response.status(201).send({id_token: token});
      console.log('Token', 'Token to response ok');
    } else {    // keinen oder mehr als einen User mit diesem Passwort gefunden
      return response.status(401).send({message: 'The username or password dont match', email: email});
    }
  });
};

function getjwtToken(user: User): string {
  let keyProvider = new JwtKeyProvider();
  let jwtUserservice = new JwtUserService(keyProvider);
  return jwtUserservice.createJWT(user);
}

function whoIsUser(request: Request): User {
  let keyProvider = new JwtKeyProvider();
  let jwtUserService = new JwtUserService(keyProvider);
  return jwtUserService.whoIsUser(request);
}
