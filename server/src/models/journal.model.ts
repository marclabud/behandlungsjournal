'use strict';
const model = 'Journal';

import * as mongoose from 'mongoose';
let ObjectId = mongoose.Schema.Types.ObjectId;


const journalSchema = new mongoose.Schema({
  _id: {type: ObjectId, auto: true}, // auto generate new ObjectId
  name: {type: String, required: true},
  patient_id: {type: String, required: true},
  diagnose: String,
  dauer: {
    startDatum: {type: Date, required: true},
    endeDatum: {type: Date, required: true},
  }

}, {collection: model});

const Journal = mongoose.model(model, journalSchema);
module.exports = Journal;

