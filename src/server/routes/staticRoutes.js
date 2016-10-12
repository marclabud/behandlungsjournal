'use strict';
const express = require('express');
const path = require('path');
const staticRouter = express.Router();

// // all other routes are handled by Angular
staticRouter.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../dist/index.html'));
});
module.exports=staticRouter;

