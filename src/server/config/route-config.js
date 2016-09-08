(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const bookRoutes = require('../routes/books');
    // const authorRoutes = require('../routes/authors');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/books', bookRoutes);
    // app.use('/authors', bookRoutes);
  };

})(module.exports);
