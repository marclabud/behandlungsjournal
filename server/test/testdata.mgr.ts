'use strict';
/*
 * This Test data load framework uses the node MongoDB module to connect to the local
 * mongodb database on this virtual machine
 *
 * More here: http://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
 */
import {MongoClient} from 'mongodb';
import {PatientDataMgr} from './patient/patient.datamgr';
import {PatientData} from './patient/patient.data';
import {UserDataMgr} from './user/user.datamgr';
import {UserData} from './user/user.data';

// connect away
MongoClient.connect('mongodb://127.0.0.1:27017/test', (err, db) => {
  if (err) {
    throw err;
  }
  console.log('Connected to Database');

  // prepare User data
  new UserDataMgr(db, new UserData());

  // prepare Patient data
  sleep(100).then(() => {
    new PatientDataMgr(db, new PatientData());
  });

  // prepare other data
  //sleep(100).then(() => {
  //  ...
  //});

  // close db
  db.close();
});


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
