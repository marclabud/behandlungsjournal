'use strict';

const Journal = require ('../models/journal.model');

module.exports.getAllJournals = (request, response) => {
  Journal.find({}, (err, docs) => {
    console.log ('getAllJournals: docs', docs);
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.getAllJournalsbyPatientId = (request, response) => {
  Journal.find({patient_id: request.params.id}, (err, docs) => {
    console.log ('getAllJournalsbyPatientId: docs', docs);
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.countJournals = (request, response) => {
  Journal.count((err, count) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(count);
  });
};

module.exports.addJournal = (request, response) => {
  let JournaltoUpdate = new Journal(request.body);
  JournaltoUpdate.save((err) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(JournaltoUpdate);
  });
};
module.exports.findJournalbyId = (request, response) => {
  Journal.findOne({_id: request.params.id}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200).json(docs);
  });
};
// update Journal by Id
module.exports.updateJournal = (request, response) => {
  Journal.findOneAndUpdate({_id: request.params.id}, request.body, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

module.exports.deleteJournal = (request, response) => {
  Journal.findOneAndRemove({_id: request.params.id}, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

