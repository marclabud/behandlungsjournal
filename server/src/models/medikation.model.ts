'use strict';
import * as mongoose from 'mongoose';
let ObjectId = mongoose.Schema.Types.ObjectId;

const model = 'Medikation';
const medikationSchema = new mongoose.Schema({
  _id: {type: ObjectId, auto: true}, // auto generate new ObjectId
  name: {type: String, required: true},
  journal_id: {type: String, required: true},
  dosierung: {type: Number, required: true},
  haeufigkeit: {
    morgens: {type: Boolean, required: true},
    mittags: {type: Boolean, required: true},
    abends: {type: Boolean, required: true},
  },
  dauer: {
    startdatum: {type: String, required: true},
    enddatum: {type: String, required: true},
  },
}, {collection: model});

const Medikation = mongoose.model(model, medikationSchema);
module.exports = Medikation;

