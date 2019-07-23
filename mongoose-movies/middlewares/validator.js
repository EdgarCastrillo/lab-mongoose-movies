'use strict';

const mongoose = require('mongoose');

const objectIdIsValid = async (req, res, next) => {
  const objectId = req.params.id;
  console.log(objectId);
  if (!mongoose.Types.ObjectId.isValid(objectId)) {
    return res.redirect(req.path);
  }
  next();
};

// validación para evitar que nos pasen un username o password vacío, más allá de la validación required en front-end
const isNotEmptyCelebrity = (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  if (!name || !occupation || !catchPhrase) {
    // le pasamos el path al redirect, el path es una propiedad de la request
    console.log(req.path);
    return res.redirect(req.originalUrl);
  }
  next();
};

const isNotEmptyMovies = (req, res, next) => {
  const { title, genre, plot } = req.body;
  if (!title || !genre || !plot) {
    // le pasamos el path al redirect, el path es una propiedad de la request
    console.log(req.path);
    return res.redirect(req.originalUrl);
  }
  next();
};

module.exports = { isNotEmptyCelebrity, isNotEmptyMovies, objectIdIsValid };
