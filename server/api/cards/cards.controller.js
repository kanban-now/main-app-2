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
    cardId: 1,
    cardText: 'TL 1',
  }, {
    cardId: 2,
    cardText: 'TL 2',
  }, {
    cardId: 3,
    cardText: 'TL 3x',
  }
];


var location2Cards = [
  {
    cardId: 4,
    cardText: 'TM 1',
  }, {
    cardId: 5,
    cardText: 'TM 2',
  }, {
    cardId: 6,
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