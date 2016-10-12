"use strict";

const express = require('express');
const path = require('path');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require ('./services/mongodbservice');

const app = express();
const router = express.Router();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

// mongoose
// Use native promises
mongoose.Promise = global.Promise;

// REGISTER OUR ROUTES -------------------------------
// all of our routes will have no prefix
app.use(require('./routes/userRoutes.js'));
app.use(require('./routes/staticRoutes.js'));

connect()
  .on('error', console.error.bind(console, 'connection error:'))
  .on('disconnected', connect)
  .once('open', listen);

function listen () {
  app.listen(app.get('port'));
  console.log('Behandlungsjournal listening on port ' +app.get('port'));
}

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect('mongodb://localhost:27017/test', options).connection;
}

