(function () {
  // <---Redirect to /books from main page--->
  $(document).on('click', '.books', function(e) {
    e.preventDefault();
    console.log('clicked');
    window.location.href ="/books";
  });
  // <---Redirect to /authors from main page--->
  $(document).on('click', '.authors', function(e) {
    e.preventDefault();
    console.log('clicked');
    window.location.href ="/authors";
  });

  // <---Add Author--->
  $(document).on('click', '.add_author', function(e) {
    e.preventDefault();
    const $authorID = $('.author_edit_submit').attr('data-id');
    const $FirstName = $('#author-first_name').val();
    const $LastName = $('#author-last_name').val();
    const $Portrait = $('#author-portrait_url').val();
    const $Biography = $('#book-biography').val();
    const newAuthor = {
      first_name: $FirstName,
      last_name: $LastName,
      portrait_url: $Portrait,
      biography: $Biography
    };
    $.ajax({
      type: 'POST',
      url: `/authors/new/submit`,
      data: newAuthor
    })
    .done((data) => {
      console.log('ajax sent');
    })
    .fail((err) => {
      console.log(err);
    });
  });

  // <---Delete Single Book--->
  $(document).on('click', '.book-delete-btn', function(e) {
    e.preventDefault();
    const $this = $(this);
    const $bookID = $this.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/books/${$bookID}/delete`
    });
    location.reload();
  });

  // <---Delete Single Book--->
  $(document).on('click', '#author-delete', function(e) {
    e.preventDefault();
    const $this = $(this);
    console.log(this);
    const $authorID = $this.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/authors/${$authorID}/delete`
    });
    location.reload();
  });

  // <---Edit Book--->
  $(document).on('click', '.book_edit_submit', function(e) {
    e.preventDefault();
    const $bookID = $('#book-id').attr('data-id');
    const $updatedTitle = $('#book-update-title').val();
    const $updatedGenre = $('#book-update-genre').val();
    const $updatedCoverUrl = $('#book-update-cover-url').val();
    const $updatedDescription = $('#book-update-description').val();
    const updatedBook = {
      title: $updatedTitle,
      genre: $updatedGenre,
      cover_url: $updatedCoverUrl,
      description: $updatedDescription
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

  // <---Edit Author--->
  $(document).on('click', '.author_edit_submit', function(e) {
    e.preventDefault();
    const $authorID = $('.author_edit_submit').attr('data-id');
    const $updatedFirstName = $('#author-update-first_name').val();
    const $updatedLastName = $('#author-update-last_name').val();
    const $updatedPortrait = $('#author-update-portrait_url').val();
    const $updatedBiography = $('#book-update-biography').val();
    const updatedAuthor = {
      first_name: $updatedFirstName,
      last_name: $updatedLastName,
      portrait_url: $updatedPortrait,
      biography: $updatedBiography
    };
    $.ajax({
      type: 'PUT',
      url: `/authors/${$authorID}/edit/submit`,
      data: updatedAuthor
    })
    .done((data) => {
      console.log('ajax sent');
    })
    .fail((err) => {
      console.log(err);
    });
  });

})();
