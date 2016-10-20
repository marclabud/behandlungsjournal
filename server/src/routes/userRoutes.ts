'use strict';
import * as express from 'express';
const UserController = require ('../controller/usercontroller');

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
userRouter.post('/user/login', UserController.loginUser);

export= userRouter;
