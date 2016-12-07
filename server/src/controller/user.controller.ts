'use strict';
import {JwtUserService} from '../service/userJwtService';
import {JwtKeyProvider} from '../service/keyProviderService';
import {User} from '../service/model/user';
import {Request} from 'express-serve-static-core';

const RBAC = require('rbac-a');
// const CustomProvider = require('CustomProvider');

// const JsonProvider = RBAC.providers.JsonProvider;
const CustomProvider = RBAC.providers.CustomProvider;

const PERMISSIONS = {
  roles: {
    'guest': {},
    'reader': {
      permissions: ['read'],
      inherited: ['guest']
    },
    'writer': {
      permissions: ['create'],
      inherited: ['reader']
    },
    'editor': {
      permissions: ['update'],
      inherited: ['reader']
    },
    'director': {
      permissions: ['delete'],
      inherited: ['reader', 'writer', 'editor'],
      attributes: ['test']
    },
    'arzt': {
      permissions: ['manage'],
      inherited: ['director']
    },
    'tierpfleger': {
      inherited: ['reader', 'writer']
    }
  }
  // users: {
  //   'joe': ['guest'],
  //   'jim': ['missingRole']
  // }
};

let roles = {
  'director': {
    'reader': {'guest': null},
    'editor': {'reader': null},
    'writer': {'reader': null}
  }
};

let rbac = new RBAC({
  // provider: new JsonProvider(RULES)
  provider: new CustomProvider(PERMISSIONS, roles)
});

rbac.on('error', function (err) {
  console.error('Error while checking $s/%s', err.role, err.user);
  console.error(err.stack);
});

const UserCollection = require('../models/user.model');

module.exports.getAllUsers = (request, response) => {
  let username = whoIsUser(request);
  console.log('getallusers: usernamefromtoken', username);

  rbac.check('joe', 'manage').then(function (allowed) {
      if (allowed) {
        UserCollection.find({}, (err, docs) => {
          if (err) {
            return console.error(err);
          }
          response.status(200).json(docs);
        });
        console.log('User can read!');
      } else {
        console.log('User cannot read.');
        console.log('Please contact your system admin for more information');
        return response.status(401).send('User has no rights');
      }
    }
  ).catch(function (err) {
    console.error(err && err.stack || err || 'ERROR');
    return response.status(200);
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

function whoIsUser(request: Request): string {
  let keyProvider = new JwtKeyProvider();
  let jwtUserService = new JwtUserService(keyProvider);
  return jwtUserService.whoIsUser(request);
}
