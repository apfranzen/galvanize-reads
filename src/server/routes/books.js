const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  knex('books').select()
  .then((results) => {
    const renderObject = {};
    renderObject.books = results;
    res.render('books', renderObject);
  })
  .catch((err) => {
    return next(err);
  });
});

module.exports = router;
