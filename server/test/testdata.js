// Mongodb Testdaten
// Löschen eines Dokuments der Collection

db.runCommand(
  {
    delete: "patients",
    deletes: [ {q:{ name: "Strolch" },limit:1} ]
  }
);

// Anlegen der Patientendaten
db.runCommand(
  {
    insert: "patients",
    documents: [
      { name: "Strolch", tierart: "Hund", rasse: "Mischling", diagnose: "Bisswunde", eigentuemerVorname: "Hans" ,eigentuemerNachname:"Iten"},
      { name: "Minka", tierart: "Katze", rasse: "Siam", diagnose: "Vergiftung" ,eigentuemerVorname: "Maria",eigentuemerNachname: "Rogenmoser"},
      { name: "Blacky",tierart: "Pferd", rasse: "Freiberger", diagnose: "Stauchung", eigentuemerVorname: "Peter", eigentuemerNachname: "Jura"}
    ],

  }

);
