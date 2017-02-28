import * as mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const Medikation = require('../models/medikation.model');

module.exports.getAllMedications = (request, response) => {
  Medikation.find({}, (err, docs) => {
    console.log('getAllMedications: docs', docs);
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.getMedicationsByJournalId = (request, response) => {
  const journal_id: string = request.params.journal_id;
  const objectId = ObjectId(journal_id);
  console.log('parameter journal_id', objectId );
  Medikation.find({journal_id: objectId}, (err, docs) => {
    console.log('getMedicationsByJournalId: docs', docs);
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.countMedications = (request, response) => {
  Medikation.count((err, count) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(count);
  });
};

module.exports.addMedication = (request, response) => {
  const MedicationtoUpdate = new Medikation(request.body);
  MedicationtoUpdate.save((err) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(MedicationtoUpdate);
  });
};
module.exports.findMedicationById = (request, response) => {
  Medikation.findOne({_id: request.params.id}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200).json(docs);
  });
};
// update Medication by Id
module.exports.updateMedication = (request, response) => {
  Medikation.findOneAndUpdate({_id: request.params.id}, request.body, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

module.exports.deleteMedication = (request, response) => {
  Medikation.findOneAndRemove({_id: request.params.id}, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

