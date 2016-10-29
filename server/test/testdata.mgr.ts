'use strict';
/*
 * This example uses the node MongoDB module to connect to the local
 * mongodb database on this virtual machine
 *
 * More here: http://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
 */

// require node modules (see package.json)
import {MongoClient} from 'mongodb';
import {PatientDataMgr} from './patient/patient.datamgr';
import {PatientData} from './patient/patient.data';

// connect away
MongoClient.connect('mongodb://127.0.0.1:27017/test', (err, db) => {
  if (err) {
    throw err;
  }
  console.log('Connected to Database');

  // prepare patient data
  new PatientDataMgr(db, new PatientData());

  // prepare other data
  // ...

  // close db
  db.close();
});


