const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  knex('authors')
  .join('authors_books', 'author_id', 'authors.id')
  .join('books', 'books.id', 'authors_books.book_id')
  .select()
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
  res.render('author_edit');
  // knex('books')
  // .where('id', id)
  // .then((results) => {
  //   const renderObject = {};
  //   renderObject.book = results;
  //   res.render('bookEdit', renderObject);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
});

router.get('/:id/delete', function (req, res, next) {
  let id = parseInt(req.params.id);
  knex('authors')
  .where('id', id)
  .then((results) => {
    const renderObject = {};
    renderObject.author = results;
    res.render('author_delete', renderObject);
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;
