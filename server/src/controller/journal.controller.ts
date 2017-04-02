const Journal = require('../models/journal.model');

import * as mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

module.exports.getAllJournals = (request, response) => {
  Journal.find({}, (err, docs) => {
    console.log('getAllJournals: docs', docs);
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.getAllJournalsbyPatientId = (request, response) => {
  const patient_id: string = request.params.patient_id;
  const objectId = ObjectId(request.params.id);
  console.log('parameter patient_id', objectId);
  Journal.find({patient_id: patient_id}, (err, docs) => {
    console.log('getAllJournalsbyPatientId: docs', docs);
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
  const JournaltoUpdate = new Journal(request.body);
  JournaltoUpdate.save((err) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(JournaltoUpdate);
  });
};
module.exports.findJournalbyId = (request, response) => {
  const objectId = ObjectId(request.params.id);
  Journal.findOne({_id: objectId}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200).json(docs);
  });
};
// update Journal by Id
module.exports.updateJournal = (request, response) => {
  const objectId = ObjectId(request.params.id);
  Journal.findOneAndUpdate({_id: objectId}, request.body, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

module.exports.deleteJournal = (request, response) => {
  const objectId = ObjectId(request.params.id);
  Journal.findOneAndRemove({_id: objectId}, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

