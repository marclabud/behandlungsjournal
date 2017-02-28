import * as mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const model = 'Medikation';
const medikationSchema = new mongoose.Schema({
  _id: {type: ObjectId, auto: true}, // auto generate new ObjectId
  name: {type: String, required: true},
  journal_id: {type: ObjectId, required: true},
  dosierung: {type: Number, required: true},
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

const Medikation = mongoose.model(model, medikationSchema);
module.exports = Medikation;

