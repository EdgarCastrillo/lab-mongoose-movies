'use strict';

const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/mongooseMovies')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// const celebritiesArray = [{
//   name: 'Kanye West',
//   occupation: 'singer',
//   catchPhrase: 'If you have the opportunity to play this game called life, you have to appreciate every moment. A lot of people don’t appreciate their moment until it’s passed'
// }, {
//   name: 'Kim Kardashian',
//   occupation: 'actor',
//   catchPhrase: 'I didn’t love school.'
// }, {
//   name: 'Andreu Buenafuente',
//   occupation: 'comedian',
//   catchPhrase: 'Yo no me pienso morir, ya lo tengo claro. Lo he estado hablando y no le encuentro la gracia'
// }];

// const addCelebrities = async (celebritiesArray) => {
//   try {
//     const response = await Celebrity.insertMany(celebritiesArray);
//     response.forEach(celebrity => { console.log(celebrity.name); }); // with insertMany, we connect to the database, send it data, receive data and print it.
//   } catch (error) {
//     console.log(error);
//   }
// };

const moviesArray = [{
  title: 'Scary movie',
  genre: 'comedy',
  plot: 'Lorem ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem'
}, {
  title: 'The Lion King',
  genre: 'drama',
  plot: 'Lorem ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem'
}, {
  title: 'Spiderman',
  genre: 'action',
  plot: 'Lorem ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem'
}];

const addMovies = async (moviesArray) => {
  try {
    const response = await Movie.insertMany(moviesArray);
    response.forEach(movie => { console.log(movie.title); }); // with insertMany, we connect to the database, send it data, receive data and print it.
  } catch (error) {
    console.log(error);
  }
};

addMovies(moviesArray);
