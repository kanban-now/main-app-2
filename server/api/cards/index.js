'use strict';

var express = require('express');
var controller = require('./cards.controller.js');

var router = express.Router();

router.get('/', controller.index);

// LEFT OFF - figure out how to make below work to handle a move.
// Read up on Express docs for how to do complex URL like below
//var url = '/api/cards/' + item.cardId + '/move/' + destination;
router.post('/{cardId}/move/{destination', controller.handleMove);

module.exports = router;