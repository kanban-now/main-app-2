/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var request = require('request')
var _ = require('lodash');


exports.index = function(req, topLevelRes) {
  var username = process.env.kanban_now_services_apiKey_id;
  var password = process.env.kanban_now_services_apiKey_secret;
  var serviceBaseUrl = process.env.archive_card_service_base_url;

  var stormpathUserId = req.param('stormpathUserId');
  var url = serviceBaseUrl + '/archivedCards/' + stormpathUserId;

  var options = {
    url: url,
    qs: { pageNumber: req.param('pageNumber'), pageSize: 10 },
    auth: {
      user: username,
      password: password
    }
  }

  request(options, function (err, res, body) {
    if (err) {
      console.dir(err);
      return;
    }
    var x = JSON.parse(body);
    console.dir('headers', res.headers);
    console.dir('status code', res.statusCode);
    console.dir(body);
    console.dir('data=' , x.data);
    // return res.send(200, x.data);
    topLevelRes.json(x);
  })

};

