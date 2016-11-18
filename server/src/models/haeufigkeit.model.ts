'use strict';
import * as mongoose from 'mongoose';
const model = 'Haeufigkeit';

const haeufigkeitSchema = new mongoose.Schema({
  _id: String,
  morgens: {type: Boolean, default: false},
  mittags: {type: Boolean, default: false},
  abends: {type: Boolean, default: false}
}, {collection: model});

const Haeufigkeit = mongoose.model(model, haeufigkeitSchema);
module.exports = Haeufigkeit;

