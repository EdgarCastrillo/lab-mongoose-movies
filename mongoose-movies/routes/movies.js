'use strict';

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');
const { isNotEmptyMovies, objectIdIsValid } = require('../middlewares/validator');

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies/index', { movies });
  } catch (error) {
    next(error); // busca el error que indicamos en app.js
  }
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/new', isNotEmptyMovies, async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    Movie.create({
      title,
      genre,
      plot
    });
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});

router.get('/:id', objectIdIsValid, async (req, res, next) => {
  const movieId = req.params.id;
  const movie = await Movie.findById(movieId);
  try {
    res.render('movies/show', movie);
  } catch (error) {
    next(error); // busca el error que indicamos en app.js
  }
});

router.post('/:id/delete', objectIdIsValid, async (req, res, next) => {
  const movieId = req.params.id;
  try {
    await Movie.findByIdAndRemove(movieId);
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  const movieId = req.params.id;
  const movie = await Movie.findById(movieId);
  try {
    res.render('movies/edit', movie);
  } catch (error) {
    next(error); // busca el error que indicamos en app.js
  }
});

router.post('/:id/edit', isNotEmptyMovies, async (req, res, next) => {
  const movieId = req.params.id;
  try {
    const { title, genre, plot } = req.body;
    await Movie.findByIdAndUpdate(movieId, {
      $set: {
        title,
        genre,
        plot
      }
    }, false);
    res.redirect('/movies/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
