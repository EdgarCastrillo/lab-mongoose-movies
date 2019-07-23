'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    enum: ['comedy', 'drama', 'terror', 'action'],
    required: true
  },
  plot: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Movie = mongoose.model('Movie', celebritySchema);

module.exports = Movie;
