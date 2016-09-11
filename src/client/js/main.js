(function () {
  // Edit a book
  // $(document).on('click', '.book_edit_submit', function(e) {
  //   e.preventDefault();
  //   const $bookID = $('#book-id').attr('data-id');
  //   const $updatedTitle = $('#book-update-title').val();
  //   // console.log($updatedTitle);
  //   const $updatedGenre = $('#book-update-genre').val();
  //   const $updatedCoverUrl = $('#book-update-cover-url').val();
  //   const $updatedDescription = $('#book-update-description').val();
  //   // const $updatedAuthors = $('#book-update-authors').val();
  //   const updatedBook = {
  //     title: $updatedTitle,
  //     genre: $updatedGenre,
  //     cover_url: $updatedCoverUrl,
  //     description: $updatedDescription
  //     // author: $updatedAuthors
  //   };
  //   $.ajax({
  //     type: 'PUT',
  //     url: `/books/${$bookID}/edit`,
  //     data: updatedBook
  //   })
  //   .done((data) => {
  //     console.log('ajax sent');
  //   })
  //   .fail((err) => {
  //     console.log(err);
  //   });
  // });

  // Delete a single book
  $(document).on('click', '.book-delete-btn', function(e) {
    e.preventDefault();
    const $this = $(this);
    const $bookID = $this.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/books/${$bookID}/delete`
    });
  });

  $(document).on('click', '#author-delete', function(e) {
    e.preventDefault();
    const $this = $(this);
    console.log(this);
    const $authorID = $this.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/authors/${$authorID}/delete`
    });
  });

  // $(document).on('click', '#author-edit', function(e) {
  //   e.preventDefault();
  //   const $this = $(this);
  //   const $authorID = $this.attr('data-id');
  //   $.ajax({
  //     type: 'GET',
  //     url: `/authors/${$authorID}/edit`
  //   });
  // });

  // Edit an author
  $(document).on('click', '.book_edit_submit', function(e) {
    e.preventDefault();
    const $bookID = $('#book-id').attr('data-id');
    const $updatedTitle = $('#book-update-title').val();
    const $updatedGenre = $('#book-update-genre').val();
    // console.log($updatedTitle);
    const $updatedCoverUrl = $('#book-update-cover-url').val();
    const $updatedDescription = $('#book-update-description').val();
    // const $updatedAuthors = $('#book-update-authors').val();
    const updatedBook = {
      title: $updatedTitle,
      genre: $updatedGenre,
      cover_url: $updatedCoverUrl,
      description: $updatedDescription
      // author: $updatedAuthors
    };
    $.ajax({
      type: 'PUT',
      url: `/books/${$bookID}/edit/submit`,
      data: updatedBook
    })
    .done((data) => {
      console.log('ajax sent');
    })
    .fail((err) => {
      console.log(err);
    });
  });

  // $(document).on('click', '.book_edit_submit', function(e) {
  //   e.preventDefault();
  //   const $authorID = $('#book-id').attr('data-id');
  //   const $updatedFirstName = $('#author-update-first_name').val();
  //   const $updatedLastName = $('#author-update-last_name').val();
  //   // console.log($updatedTitle);
  //   const $updatedPortrait = $('#author-update-portrait_url').val();
  //   const $updatedBiography = $('#book-update-biography').val();
  //   // const $updatedAuthors = $('#book-update-authors').val();
  //   const updatedAuthor = {
  //     first_name: $updatedFirstName,
  //     last_name: $updatedLastName,
  //     portrait_url: $updatedPortrait,
  //     biography: $updatedBiography
  //     // author: $updatedAuthors
  //   };
  //   $.ajax({
  //     type: 'PUT',
  //     url: `/authors/${$authorID}/edit/submit`,
  //     data: updatedAuthor
  //   })
  //   .done((data) => {
  //     console.log('ajax sent');
  //   })
  //   .fail((err) => {
  //     console.log(err);
  //   });
  // });



  // $(document).on('click', '.book_edit_submit', function(e) {
  //   e.preventDefault();
  //   const $updatedTitle = $('#book-update-title').val();
  //   console.log($updatedTitle);
  //   const $updatedGenre = $('#book-update-genre').val();
  //   const $updatedCoverUrl = $('#book-update-genre').val();
  //   const $updatedAuthors = $('#book-update-authors').val();
  //   const payload
  // }
  //   $.ajax({
  //     type: 'PUT',
  //     url: '/books/edit/${bookID}'
  //   })
  //   .done((data))
  //   })
  //   .fail((err) => {
  //   // console.log(err);
  //   });
  // });

})();
