'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name : String,
  email: String,
  password: String,
  admin: Boolean,
  active: {type: Boolean, default: true},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
  deleted_at: {type: Date, default: null}
});

mongoose.model('User', UserSchema);
