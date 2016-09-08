module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/galvanize_reads',
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
