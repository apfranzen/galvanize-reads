(function () {

  $(document).on('click', '.book_edit_submit', function(e) {
    e.preventDefault();
    const $updatedTitle = $('#book-update-title').val();
    console.log($updatedTitle);
    const $updatedGenre = $('#book-update-genre').val();
    const $updatedCoverUrl = $('#book-update-genre').val();
    const $updatedAuthors = $('#book-update-authors').val();
    const payload
  }
    $.ajax({
      type: 'PUT',
      url: '/books/edit/${bookID}'
    })
    .done((data))

  });
})();
