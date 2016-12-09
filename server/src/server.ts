import * as express from 'express';
import {json, urlencoded} from 'body-parser';
import {connection, paths} from './server.conf';
const morgan = require('morgan'); // logger
const mongoose = require('mongoose');
// configuration

const app: express.Application = express();

app.set('port', (process.env.PORT || 3000));
console.log(__dirname + '/' + paths.dist_client);
app.use('/', express.static(__dirname + '/' + paths.dist_client));

// body-parser
app.use(json());
app.use(urlencoded({extended: false}));

app.use(morgan('dev'));

// mongoose
// Use native promises
(<any>mongoose).Promise = global.Promise;

// REGISTER OUR ROUTES -------------------------------
// all of our routes will have no prefix
// ToDo: Improvement Path Variable to use ts in ts and js in js.
app.use(require('./routes/user.routes.js'));
app.use(require('./routes/patient.routes.js'));
app.use(require('./routes/journal.routes.js'));
app.use(require('./routes/medikation.routes.js'));
app.use(require('./routes/indikator.routes.js'));
app.use(require('./routes/static.routes.js'));

connect()
  .on('error', console.error.bind(console, 'connection error:'))
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  app.listen(app.get('port'));
  console.log('Behandlungsjournal listening on port ' + app.get('port'));
}

function connect() {
  let dbconnection: string = connection.dbsystem + connection.dburl + '/' + connection.dbname;
  console.log('dbc', dbconnection);
  let options = {server: {socketOptions: {keepAlive: 1}}};
  return mongoose.connect(dbconnection, options).connection;
}

