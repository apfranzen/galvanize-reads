const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  // knex('books').select()
  // .then((results) => {
  //   const renderObject = {};
  //   renderObject.books = results;
  knex('books')
  .join('authors_books', 'book_id', 'books.id')
  .join('authors', 'authors.id', 'authors_books.author_id')
  .select('books.id', 'books.title', 'books.description', 'books.cover_url', 'authors.last_name', 'authors.first_name')
  .then((results) => {
    const renderObject = {};
    renderObject.books = results;
    res.render('books', renderObject);
  })
  .catch((err) => {
    return next(err);
  });
});

router.get('/new', function (req, res, next) {
  res.render('new');
  // console.log('hit new');
});

router.get('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  knex('books')
  .where('books.id', id)
  .join('authors_books', 'book_id', 'books.id')
  .join('authors', 'authors.id', 'authors_books.author_id')
  .select('books.id', 'books.title', 'books.description', 'books.cover_url', 'authors.last_name', 'authors.first_name')
  .then((results) => {
    const renderObject = {};
    renderObject.book = results;
    res.render('single_book', renderObject);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/:id/edit', function (req, res, next) {
  let id = parseInt(req.params.id);
  knex('books')
  .where('books.id', id)
  .join('authors_books', 'book_id', 'books.id')
  .join('authors', 'authors.id', 'authors_books.author_id')
  .select('books.id', 'books.title', 'books.description', 'books.genre', 'books.cover_url', 'authors.last_name', 'authors.first_name')
  .then((results) => {
    const renderObject = {};
    renderObject.book = results[0];
    res.render('book_edit', renderObject);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/:id/delete', function (req, res, next) {
  let id = parseInt(req.params.id);
  knex('books')
  .where('id', id)
  .then((results) => {
    const renderObject = {};
    renderObject.book = results;
    res.render('book_delete', renderObject);
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;
