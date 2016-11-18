'use strict';
import * as mongoose from 'mongoose';
const model = 'Haeufigkeit';

const haeufigkeitSchema = new mongoose.Schema({
  _id: String,
  morgens: {type: Boolean},
  mittags: {type: Boolean},
  abends: {type: Boolean}
}, {collection: model});

const Haeufigkeit = mongoose.model(model, haeufigkeitSchema);
module.exports = Haeufigkeit;

