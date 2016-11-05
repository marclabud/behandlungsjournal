'use strict';

var url = require('url');


var Patient = require('./PatientService');


module.exports.addPatient = function addPatient (req, res, next) {
  Patient.addPatient(req.swagger.params, res, next);
};

module.exports.getAllPatients = function getAllPatients (req, res, next) {
  Patient.getAllPatients(req.swagger.params, res, next);
};
