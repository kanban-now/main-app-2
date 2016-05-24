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

var cardList = [
  {
    cardId: 1,
    cardText: 'TL 1',
    location: 1
  }, {
    cardId: 2,
    cardText: 'TL 2',
    location: 1
  }, {
    cardId: 3,
    cardText: 'TL 3x',
    location: 1
  },

  {
    cardId: 4,
    cardText: 'TM 1',
    location: 2
  }, {
    cardId: 5,
    cardText: 'TM 2',
    location: 2
  }, {
    cardId: 6,
    cardText: 'TM 3',
    location: 2
  },

  {
    cardId: 7,
    cardText: 'TR 1',
    location: 3
  }, {
    cardId: 8,
    cardText: 'TR 2',
    location: 3
  }, {
    cardId: 9,
    cardText: 'TR 3',
    location: 3
  },

  {
    cardId: 10,
    cardText: 'BL 1',
    location: 4
  }, {
    cardId: 11,
    cardText: 'BL 2',
    location: 4
  }, {
    cardId: 12,
    cardText: 'BL 3',
    location: 4
  },

  {
    cardId: 13,
    cardText: 'BM 1',
    location: 5
  }, {
    cardId: 14,
    cardText: 'BM 2',
    location: 5
  }, {
    cardId: 15,
    cardText: 'BM 3',
    location: 5
  },

  {
    cardId: 16,
    cardText: 'BR 1',
    location: 6
  }, {
    cardId: 17,
    cardText: 'BR 2',
    location: 6
  }, {
    cardId: 18,
    cardText: 'BR 3',
    location: 6
  },



];



function getCardsAtLocation(locationId) {
  var cardsAtLocation = [];

  var arrayLength = cardList.length;
  for (var i = 0; i < arrayLength; i++) {
    var nextItem = cardList[i]
    if( nextItem.location === locationId) {
      cardsAtLocation.push(nextItem);
    }
  }
  return cardsAtLocation;
}

function getCardWithId(cardId) {

  var arrayLength = cardList.length;
  for (var i = 0; i < arrayLength; i++) {
    var nextItem = cardList[i]
    if( nextItem.cardId  === cardId) {
      return nextItem;
    }
  }

  return null;

}


// Get list of things
exports.index = function(req, res) {

  var location = req.query.location;
  console.log('location=' + location);
  if (location === '1') {
    var cardsAtLocation = getCardsAtLocation(1);
    res.json(cardsAtLocation);
  }
  if (location === '2') {
    var cardsAtLocation = getCardsAtLocation(2);
    res.json(cardsAtLocation);
  }
  if (location === '3') {
    var cardsAtLocation = getCardsAtLocation(3);
    res.json(cardsAtLocation);
  }
  if (location === '4') {
    var cardsAtLocation = getCardsAtLocation(4);
    res.json(cardsAtLocation);
  }
  if (location === '5') {
    var cardsAtLocation = getCardsAtLocation(5);
    res.json(cardsAtLocation);
  }
  if (location === '6') {
    var cardsAtLocation = getCardsAtLocation(6);
    res.json(cardsAtLocation);
  }


};


exports.handleMove = function(req, res) {

  var cardIdAsInt = parseInt(req.params.cardId);
  var newDestinationAsInt = parseInt(req.params.destination);
  var foundCard = getCardWithId(cardIdAsInt);
  foundCard.location = newDestinationAsInt;
  var myLocalCardList = cardList;
  console.log('test');

};