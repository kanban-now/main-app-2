'use strict';

angular.module('dashboardApp')
  .controller('AdvancedCtrl', function ($scope, $http) {


      $scope.awesomeThings = [];

      $http.get('/api/things').success(function(awesomeThings) {
          $scope.awesomeThings = awesomeThings;
      });


      $scope.dragoverCallback = function(event, position, external, type) {
//          $scope.logListEvent('dragged over', event, index, external, type);
          var message = 'event:' + event + ',position:' + position + ', external:' + external + ',type:' + type;
          console.log(message);
          // // Disallow dropping in the third row. Could also be done with dnd-disable-if.
          // return position < 10;
          return true;
      };

      $scope.dropCallback = function(event, position, item, external, type, allowedType) {
          // $scope.logListEvent('dropped at', event, index, external, type);
          var message = 'event:' + event + ',position:' + position + ',item:' + item + ', external:' + external + ',type:' + type + ',allowedType:' + allowedType;
          console.log(message);

          if (external) {
              if (allowedType === 'itemType' && !item.label) return false;
              if (allowedType === 'containerType' && !angular.isArray(item)) return false;
          }

          var destination = parseInt(event.currentTarget.id);

          var url = '/api/cards/' + item.cardId + '/move/' + destination;

          $http.post(url)
              .then(
                  function(response){
                      // success callback
                      console.log('Post:' + url + ': succeeded');
                  },
                  function(response){
                      // failure callback
                      console.log('Post:' + url + ': failed.  response:' + response);
                  }
              );


          return item;

      };


      $scope.model = [];

      var id = 10;
      $scope.model.push([]);

      $scope.model[0].push([]);
      $http.get('/api/cards?location=1').success(function(cards) {
          var arrayLength = cards.length;
          for (var i = 0; i < arrayLength; i++) {
              var nextItem = cards[i]
              $scope.model[0][0].push({cardText: nextItem.cardText, cardId: nextItem.cardId});
          }
      });


      $scope.model[0].push([]);
      $http.get('/api/cards?location=4').success(function(cards) {
          var arrayLength = cards.length;
          for (var i = 0; i < arrayLength; i++) {
              var nextItem = cards[i]
              $scope.model[0][1].push({cardText: nextItem.cardText, cardId: nextItem.cardId});
          }
      });



      $scope.model.push([]);

      $scope.model[1].push([]);
      $http.get('/api/cards?location=2').success(function(cards) {
          var arrayLength = cards.length;
          for (var i = 0; i < arrayLength; i++) {
              var nextItem = cards[i]
              $scope.model[1][0].push({cardText: nextItem.cardText, cardId: nextItem.cardId});
          }
      });


      $scope.model[1].push([]);
      $http.get('/api/cards?location=5').success(function(cards) {
          var arrayLength = cards.length;
          for (var i = 0; i < arrayLength; i++) {
              var nextItem = cards[i]
              $scope.model[1][1].push({cardText: nextItem.cardText, cardId: nextItem.cardId});
          }
      });


      $scope.model.push([]);

      $scope.model[2].push([]);
      $http.get('/api/cards?location=3').success(function(cards) {
          var arrayLength = cards.length;
          for (var i = 0; i < arrayLength; i++) {
              var nextItem = cards[i]
              $scope.model[2][0].push({cardText: nextItem.cardText, cardId: nextItem.cardId});
          }
      });


      $scope.model[2].push([]);
      $http.get('/api/cards?location=6').success(function(cards) {
          var arrayLength = cards.length;
          for (var i = 0; i < arrayLength; i++) {
              var nextItem = cards[i]
              $scope.model[2][1].push({cardText: nextItem.cardText, cardId: nextItem.cardId});
          }
      });



      $scope.$watch('model', function(model) {
          $scope.modelAsJson = angular.toJson(model, true);
      }, true);

  });


