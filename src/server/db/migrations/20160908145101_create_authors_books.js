exports.up = (knex) => {
  return knex.schema.createTable('authors_books', (table) => {
    table.increments();
    table.integer('author_id').notNullable().references('id').inTable('authors');
    table.integer('book_id').notNullable().references('id').inTable('books');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('authors_books');
};
