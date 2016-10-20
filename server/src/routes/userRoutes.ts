'use strict';
import * as express from 'express';
import * as _ from 'lodash';
const UserController = require ('../controller/usercontroller');

const Userlogin = require ('../models/user.model');

const userRouter = express.Router();

// APIs
// select all users
userRouter.get('/users', UserController.getAllUsers);

// count all users
userRouter.get('/users/count', UserController.countUsers);

// create new user
userRouter.post('/user', UserController.addUser);

// find user by id
userRouter.get('/user/:id', UserController.findUserbyId);

// update user by id
userRouter.put('/user/:id', UserController.updateUser);

// delete user by id
userRouter.delete('/user/:id', UserController.deleteUser);

// user login
userRouter.post('/user/login', function (req, res) {
  let email: string = req.body.email;
  let password: string = req.body.password;

  if (email === '' || password === '') {
    return res.status(400).send('You must send the username and the password');
  }
  // mongodbquery
  Userlogin.find({email: email, password: password}, (err: any, docs: any): any => {
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
});

export= userRouter;
