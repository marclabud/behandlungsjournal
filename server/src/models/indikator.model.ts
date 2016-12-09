'use strict';
import * as mongoose from 'mongoose';
let ObjectId = mongoose.Schema.Types.ObjectId;

const model = 'Indikator';
const IndikatorSchema = new mongoose.Schema({
  _id: {type: ObjectId, auto: true}, // auto generate new ObjectId
  name: {type: String , required: true},
  journal_id: {type: ObjectId, required: true},
  rating_id: {type: ObjectId, auto: true}, // auto generate new ObjectId as MockObject for Rating
  haeufigkeit: {
    morgens: {type: Boolean, required: true},
    mittags: {type: Boolean, required: true},
    abends: {type: Boolean, required: true},
  },
  dauer: {
    startDatum: {type: Date, required: true},
    endeDatum: {type: Date, required: true},
  }
}, {collection: model});

const Medikation = mongoose.model(model, IndikatorSchema);
module.exports = Medikation;

