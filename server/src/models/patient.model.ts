'use strict';
import * as mongoose from 'mongoose';
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true},
  tierart: {type: String, required: true},
  rasse: String,
  diagnose: String,
  eigentuemerVorname: String,
  eigentuemerNachname: {type: String, required: true}
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
