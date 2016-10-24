'use strict';
import {Router} from 'express';
const UserController = require ('../controller/usercontroller');
import { paths} from './../server.conf';

const userRouter = Router();
// APIs
// select all users
userRouter.get(paths.base_path + '/users', UserController.getAllUsers);

// count all users
userRouter.get(paths.base_path + '/users/count', UserController.countUsers);

// create new user
userRouter.post(paths.base_path + '/user', UserController.addUser);

// find user by id
userRouter.get(paths.base_path + '/user/:id', UserController.findUserbyId);

// update user by id
userRouter.put(paths.base_path + '/user/:id', UserController.updateUser);

// delete user by id
userRouter.delete(paths.base_path + '/user/:id', UserController.deleteUser);

// user login
userRouter.post(paths.base_path + '/user/login', UserController.loginUser);

export= userRouter;
