import * as mongoose from 'mongoose';

const model = 'User';
const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: String
}, {collection: model});
const User = mongoose.model(model, userSchema);

module.exports = User;

