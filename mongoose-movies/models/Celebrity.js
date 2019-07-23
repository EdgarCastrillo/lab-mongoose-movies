'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    enum: ['actor', 'singer', 'comedian', 'unknown'],
    required: true
  },
  catchPhrase: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
