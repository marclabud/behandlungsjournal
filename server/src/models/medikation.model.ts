'use strict';
import * as mongoose from 'mongoose';

const model = 'Medikation';
const medikationSchema = new mongoose.Schema({
  _id: String,
  name: {type: String, required: true},
  journal_id: {type: String, required: true},
  dosierung: {type: Number, required: true},
  hauefigkeit: {
    morgens: {type: Boolean},
    mittags: {type: Boolean},
    abends: {type: Boolean},
  },
  dauer: {
    startdatum: {type: String, required: true},
    enddatum: {type: String, required: true},
  },
}, {collection: model});

const Medikation = mongoose.model(model, medikationSchema);
module.exports = Medikation;

