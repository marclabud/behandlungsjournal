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
import {MedikationData} from './medikation/medikation.data';
import {MedikationLoader} from './medikation/medikation.loader';
import {IndikatorLoader} from './indikator/indikator.loader';
import {IndikatorData} from './indikator/indikator.data';
import {connection} from './demo.conf';


// connect away
let dbconnection: string;
if (process.env.MONGODB_URI) {
  dbconnection = process.env.MONGODB_URI;
} else {
  dbconnection = connection.dbsystem + connection.dburl + '/' + connection.dbname;
}
console.log ('dbc', dbconnection );
MongoClient.connect(dbconnection, (err, db) => {
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

  // prepare Mediaktion data
  new MedikationLoader(db, new MedikationData());

  // prepare Indikator data
  new IndikatorLoader(db, new IndikatorData());

  // close db
  db.close();
});

