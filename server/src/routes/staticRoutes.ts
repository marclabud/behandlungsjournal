'use strict';
import * as express from "express";
const path = require('path');
const staticRouter = express.Router();

// // all other routes are handled by Angular
const clientPath: string ='../public/index.html';
staticRouter.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, clientPath));
});
module.exports=staticRouter;

