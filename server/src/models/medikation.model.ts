'use strict';
import * as mongoose from 'mongoose';
const Haeufigkeit = require('../haeufigkeit.model');

const model = 'Medikation';
const medikationSchema = new mongoose.Schema({
  _id: String,
  name: {type: String, required: true},
  journal_id: {type: String, required: true},
  dosierung: Number, required: true,
  haeufigkeit: [Haeufigkeit]
}, {collection: model});

const Medikation = mongoose.model(model, medikationSchema);
module.exports = Medikation;

