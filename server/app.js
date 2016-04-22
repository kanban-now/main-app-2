/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var ExpressStormpath = require('express-stormpath');

// Setup server

// var path = require('path');
var app = express();

var server = require('http').createServer(app);


require('./config/express')(app);

var path = require('path');

app.use(ExpressStormpath.init(app, {
  website: true,
  web: {
    spaRoot: path.join(__dirname, '..','client','index.html')
  }
}));



require('./routes')(app);

// Start server
app.on('stormpath.ready', function() {
  // Start server
  server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
});

// server.listen(config.port, config.ip, function () {
//   console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
// });

// Expose app
exports = module.exports = app;