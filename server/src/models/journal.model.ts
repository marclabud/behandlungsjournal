'use strict';
import * as mongoose from 'mongoose';
const model = 'Journal';

const journalSchema = new mongoose.Schema({
  _id: String,
  name: {type: String, required: true},
  patient_id: {type: String, required: true},
  diagnose: String,
  startdatum: {type: String, required: true},
  enddatum: {type: String, required: true},
}, {collection: model});

const Journal = mongoose.model(model, journalSchema);
module.exports = Journal;

