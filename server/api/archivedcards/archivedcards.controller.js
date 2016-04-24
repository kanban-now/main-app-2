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

// Get list of things
exports.index = function(req, res) {
  if(req.param('pageNumber') === '1' )
{
  res.json([
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 1"},
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 2"},
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 3"},
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 4"},
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 5"},
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 6"},
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 7"},
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 8"},
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 9"},
    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 10"},
  ]);
  }
else {
    res.json([
      {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 10"},
      {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 11"},
      {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 12"},
      {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 13"},
      {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 14"},
      {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 15"},
      {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 16"},
      {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 17"},
    ]);

};
};

