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

router.put('/:id/edit/submit', (req, res, next) => {
  let id = parseInt(req.params.id);
  console.log(id);
  let updatedTitle = req.body.title;
  let updatedGenre = req.body.genre;
  let updatedCoverUrl = req.body.cover_url;
  let updatedDescription = req.body.description;
  knex('books')
  .update({
    title: updatedTitle,
    genre: updatedGenre,
    cover_url: updatedCoverUrl,
    description: updatedDescription
  })
  .where('id', id)
  .returning('*')
  .then((results) => {
    if (results.length) {
      res.status(200).json({
        status: 'success',
        message: `${results[0].title} has been updated!`
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

// router.get('/:id/delete', function (req, res, next) {
//   let id = parseInt(req.params.id);
//   knex('books')
//   .where('id', id)
//   .then((results) => {
//     const renderObject = {};
//     renderObject.book = results;
//     res.render('book_delete', renderObject);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });

router.delete('/:id/delete', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('authors_books')
  .where('book_id', id)
  .del()
  .then((books) => {
    knex('books')
    .where('books.id', id)
    .del()
    .then((results) => {
      res.status(200).send({
        status: 'success'
      });
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Failed request!'
    });
  });
});

router.get('/new', function (req, res, next) {
  res.render('new');
  // console.log('hit new');
});

router.get('/:id/edit', function (req, res, next) {
  let id = parseInt(req.params.id);
  console.log(id);
  knex('books')
  .where('books.id', id)
  .join('authors_books', 'book_id', 'books.id')
  .join('authors', 'authors.id', 'authors_books.author_id')
  .select('books.id', 'books.title', 'books.description', 'books.genre', 'books.cover_url', 'authors.last_name', 'authors.first_name')
  .then((results) => {
    console.log('results ', results);
    const renderObject = {};
    renderObject.book = results[0];
    res.render('book_edit', renderObject);
  })
  .catch((err) => {
    console.log(err);
  });
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

module.exports = router;
