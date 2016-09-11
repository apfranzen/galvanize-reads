const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  knex('authors')
  .join('authors_books', 'author_id', 'authors.id')
  .join('books', 'books.id', 'authors_books.book_id')
  .select('authors.id', 'authors.last_name', 'authors.first_name', 'authors.biography', 'authors.id', 'authors.portrait_url')
  .then((results) => {
    const renderObject = {};
    renderObject.authors = results;
    res.render('authors', renderObject);
  })
  .catch((err) => {
    return next(err);
  });
});

router.get('/new', function (req, res, next) {
  res.render('author_new');
  // console.log('hit new');
});

router.get('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  knex('books')
  .where('books.id', id)
  .join('authors_books', 'book_id', 'books.id')
  .join('authors', 'authors.id', 'authors_books.author_id')
  .select('authors.last_name', 'authors.first_name', 'books.title', 'authors.biography', 'authors.portrait_url')
  .then((results) => {
    const renderObject = {};
    renderObject.author = results;
    res.render('single_author', renderObject);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/:id/edit', function (req, res, next) {
  let id = parseInt(req.params.id);
  knex('authors')
  .where('authors.id', id)
  .join('authors_books', 'author_id', 'authors.id')
  .join('books', 'books.id', 'authors_books.book_id')
  .select('authors.id', 'authors.first_name', 'authors.last_name', 'authors.biography', 'authors.portrait_url')
  .then((results) => {
    console.log(results);
    const renderObject = {};
    renderObject.author = results[0];
    res.render('author_edit', renderObject);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.put('/:id/edit/submit', (req, res, next) => {
  let id = parseInt(req.params.id);
  console.log(id);
  let updatedFirstName = req.body.first_name;
  let updatedLastName = req.body.last_name;
  let updatedPortraitUrl = req.body.portrait_url;
  let updatedBiography = req.body.biography;
  knex('authors')
  .update({
    first_name: updatedFirstName,
    last_name: updatedLastName,
    portrait_url: updatedPortraitUrl,
    biography: updatedBiography,
  })
  .where('id', id)
  .returning('*')
  .then((results) => {
    if (results.length) {
      res.status(200).json({
        status: 'success',
        message: `${results[0].first_name}, ${results[0].last_name} has been updated!`
      });
    } else {
      res.status(404).json({
        status: 'error',
        message: 'That id does not exist'
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      message: 'Updated Failed'
    });
  });
});

router.delete('/:id/delete', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('authors_books')
  .where('author_id', id)
  .del()
  .then((authors) => {
    knex('authors')
    .where('authors.id', id)
    .del()
    .then((results) => {
      console.log('results ', results);
      res.status(200).send({
        status: 'success'
      });
    });
  })
  .catch((err) => {
    console.log('err ', err);
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Failed request!'
    });
  });
});

module.exports = router;
