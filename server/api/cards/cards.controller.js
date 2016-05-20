/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');


var location1Cards = [
  {
    cardText: 'TL 1',
  }, {
    cardText: 'TL 2',
  }, {
    cardText: 'TL 3x',
  }
];


var location2Cards = [
  {
    cardText: 'TM 1',
  }, {
    cardText: 'TM 2',
  }, {
    cardText: 'TM 3',
  }
];



// Get list of things
exports.index = function(req, res) {

  var location = req.query.location;
  console.log('location=' + location);
  if (location === '1') {
    res.json(location1Cards);
  }
  if (location === '2') {
    res.json(location2Cards);
  }

};