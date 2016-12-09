import * as mongoose from 'mongoose';
const model = 'Dauer';

const dauerSchema = new mongoose.Schema({
  _id: String,
  startdatum: {type: String, required: true},
  enddatum: {type: String, required: true},
}, {collection: model});

const Dauer = mongoose.model(model, dauerSchema);
module.exports = Dauer;

