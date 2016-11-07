'use strict';
import * as mongoose from 'mongoose';
const model = 'Patient';

const patientSchema = new mongoose.Schema({
  _id: String,
  name: { type: String, required: true},
  tierart: {type: String, required: true},
  rasse: String,
  eigentuemerVorname: String,
  eigentuemerNachname: {type: String, required: true}
}, {collection: model});

const Patient = mongoose.model(model, patientSchema);
module.exports = Patient;
