'use strict';
import * as mongoose from 'mongoose';
const model = 'Journal';

const journalSchema = new mongoose.Schema({
  name: { type: String, required: true},
  patient_id: {type: String, required: true},
  diagnose: String,
  startdatum: {type: Date, required: true },
  enddatum: {type: Date, required: true},
}, {collection: model});

const Journal = mongoose.model(model, journalSchema);
module.exports = Journal;

