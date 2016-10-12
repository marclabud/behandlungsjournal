'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true}
});

/**
 * Statics
 */

userSchema.statics = {

  /**
   * Select all users
   *   *
   * @param {Function} cb
   * @api private
   */

  // index: function (cb) {
  //   options.select = options.select || 'name username';
  //   return this.find(options.criteria)
  //     .select(options.select)
  //     .exec(cb);
  //}
};



const User = mongoose.model('User', userSchema);

module.exports = User;
