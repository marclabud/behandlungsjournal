'use strict';
/*
 * This Test data load framework uses the node MongoDB module to connect to the local
 * mongodb database on this virtual machine
 *
 * More here: http://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
 */
import {MongoClient} from 'mongodb';
import {PatientLoader} from './patient/patient.loader';
import {PatientData} from './patient/patient.data';
import {UserLoader} from './user/user.loader';
import {UserData} from './user/user.data';
import {JournalLoader} from './journal/journal.loader';
import {JournalData} from './journal/journal.data';

// connect away
MongoClient.connect('mongodb://127.0.0.1:27017/test', (err, db) => {
  if (err) {
    throw err;
  }
  console.log('Connected to Database');

  // prepare User data
  new UserLoader(db, new UserData());

  // prepare Patient data
  new PatientLoader(db, new PatientData());

  // prepare Journal data
  new JournalLoader(db, new JournalData());
  // prepare other data
  // sleep(100).then(() => {
  //  ...
  // });

  // close db
  db.close();
});


// function sleep(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }
