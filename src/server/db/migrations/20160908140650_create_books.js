exports.up = (knex) => {
  return knex.schema.createTable('books', (table) => {
    table.increments();
    table.string('title').unique().notNullable();
    table.string('genre').notNullable();
    table.text('description');
    table.string('cover_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('books');
};
