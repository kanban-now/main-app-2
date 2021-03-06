/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

var ExpressStormpath = require('express-stormpath');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', ExpressStormpath.loginRequired, require('./api/thing'));
  app.use('/api/archivedcards', ExpressStormpath.loginRequired, require('./api/archivedcards'));
  app.use('/api/cards', ExpressStormpath.loginRequired, require('./api/cards'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
