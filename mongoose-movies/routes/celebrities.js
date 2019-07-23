'use strict';

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('../views/celebrities/index', { celebrities });
  } catch (error) {
    next(error); // busca el error que indicamos en app.js
  }
});

router.get('/new', (req, res, next) => {
  res.render('../views/celebrities/new');
});

router.post('/new', async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const newCeleb = Celebrity.create({
      name,
      occupation,
      catchPhrase
    });
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const celebId = req.params.id;
  const celeb = await Celebrity.findById(celebId);
  try {
    res.render('../views/celebrities/show', celeb);
  } catch (error) {
    next(error); // busca el error que indicamos en app.js
  }
});

router.post('/:id/delete', async (req, res, next) => {
  const celebId = req.params.id;
  try {
    await Celebrity.findByIdAndRemove(celebId);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  const celebId = req.params.id;
  const celeb = await Celebrity.findById(celebId);
  try {
    res.render('../views/celebrities/edit', celeb);
  } catch (error) {
    next(error); // busca el error que indicamos en app.js
  }
});

router.post('/:id/edit', async (req, res, next) => {
  const celebId = req.params.id;
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.findByIdAndUpdate(celebId, {
      $set: {
        name,
        occupation,
        catchPhrase
      }
    }, false);
    res.redirect('/celebrities/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
