"use strict";
const express = require("express");
const body_parser_1 = require("body-parser");
const path = require('path');
const morgan = require('morgan'); // logger
const mongoose = require('mongoose');
const mongodb = require('./services/mongodbservice');
const app = express();
const router = express.Router();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(__dirname + '/../../dist'));
// body-parser
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
app.use(morgan('dev'));
// mongoose
// Use native promises
mongoose.Promise = global.Promise;
// REGISTER OUR ROUTES -------------------------------
// all of our routes will have no prefix
// ToDo: Improvement Path Variable to use ts in ts and js in js.
app.use(require('./routes/userRoutes.js'));
app.use(require('./routes/staticRoutes.js'));
connect()
    .on('error', console.error.bind(console, 'connection error:'))
    .on('disconnected', connect)
    .once('open', listen);
function listen() {
    app.listen(app.get('port'));
    console.log('Behandlungsjournal listening on port ' + app.get('port'));
}
function connect() {
    let options = { server: { socketOptions: { keepAlive: 1 } } };
    return mongoose.connect('mongodb://localhost:27017/test', options).connection;
}
//# sourceMappingURL=D:/Dev/git/behandlungsjournal/src/server/server.js.map