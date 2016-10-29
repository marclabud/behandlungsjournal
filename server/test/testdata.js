// Mongodb Testdaten
// Löschen eines Dokuments der Collection

const collection = 'Patient';

db.runCommand(
  {
    delete: collection,
    deletes: [ {q:{ name: "Strolch" },limit:1} ]
  }
);

// Anlegen der Patientendaten
db.runCommand(
  {
    insert: collection,
    documents: [
      { name: "Strolch", tierart: "Hund", rasse: "Mischling", diagnose: "Bisswunde", eigentuemerVorname: "Hans" ,eigentuemerNachname:"Iten"},
      { name: "Minka", tierart: "Katze", rasse: "Siam", diagnose: "Vergiftung" ,eigentuemerVorname: "Maria",eigentuemerNachname: "Rogenmoser"},
      { name: "Blacky",tierart: "Pferd", rasse: "Freiberger", diagnose: "Stauchung", eigentuemerVorname: "Peter", eigentuemerNachname: "Jura"}
    ],

  }

);
