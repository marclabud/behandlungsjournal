'use strict';
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
/**
 * Statics
 */
userSchema.statics = {};
const User = mongoose.model('user', userSchema);
module.exports = User;
//# sourceMappingURL=D:/Dev/git/behandlungsjournal/src/server/models/user.model.js.map