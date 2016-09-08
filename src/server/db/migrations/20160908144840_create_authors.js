exports.up = (knex) => {
  return knex.schema.createTable('authors', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.text('biography').notNullable();
    table.string('portrait_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('books');
};
