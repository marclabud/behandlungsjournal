'use strict';
import * as mongoose from 'mongoose';

const model = 'UserCollection';
const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
}, {collection: model});
const User = mongoose.model(model, userSchema);

module.exports = User;
