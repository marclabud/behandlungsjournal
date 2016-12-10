const Patient = require('../models/patient.model');

import * as mongoose from 'mongoose';
let ObjectId = mongoose.Types.ObjectId;

module.exports.getAllPatients = (request, response) => {
  Patient.find({}, (err, docs) => {
    console.log('getAllPatients: docs', docs);
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.countPatients = (request, response) => {
  Patient.count((err, count) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(count);
  });
};

module.exports.addPatient = (request, response) => {
  let PatienttoUpdate = new Patient(request.body);
  PatienttoUpdate.save((err) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(PatienttoUpdate);
  });
};
module.exports.findPatientbyId = (request, response) => {
  let objectId = ObjectId(request.params.id);
  Patient.findOne({_id: objectId}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200).json(docs);
  });
};
// update Patient by Id
module.exports.updatePatient = (request, response) => {
  let objectId = ObjectId(request.params.id);
  Patient.findOneAndUpdate({_id: objectId}, request.body, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

module.exports.deletePatient = (request, response) => {
  let objectId = ObjectId(request.params.id);
  Patient.findOneAndRemove({_id: objectId}, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};
