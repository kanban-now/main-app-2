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
          return item;
      };

      // $scope.logEvent = function(message, event) {
      //     console.log('message:', message, '(triggered by the following', event.type, 'event)');
      //     console.log('event:', event);
      // };
      //
      // $scope.logListEvent = function(action, event, index, external, type) {
      //     var message = external ? 'External ' : '';
      //     message += type + ' element is ' + action + ' position ' + index;
      //     $scope.logEvent(message, event);
      // };

      $scope.model = [];


      var id = 10;
      $scope.model.push([]);

      $scope.model[0].push([]);
      $scope.model[0][0].push({label: 'Item ' + id++});
      $scope.model[0][0].push({label: 'Item ' + id++});
      $scope.model[0][0].push({label: 'Item ' + id++});
      $scope.model[0][0].push({label: 'Top left'});
      $http.get('/api/cards').success(function(cards) {

          var arrayLength = cards.length;
          for (var i = 0; i < arrayLength; i++) {
              // alert(myStringArray[i]);
              //Do something
              var nextItem = cards[i]
              $scope.model[0][0].push({label: nextItem.name});
          }

      });


      $scope.model[0].push([]);
      $scope.model[0][1].push({label: 'Item ' + id++});
      $scope.model[0][1].push({label: 'Item ' + id++});
      $scope.model[0][1].push({label: 'Bottom left'});


      $scope.model.push([]);

      $scope.model[1].push([]);
      $scope.model[1][0].push({label: 'Item ' + id++});
      $scope.model[1][0].push({label: 'Item ' + id++});
      $scope.model[1][0].push({label: 'Item ' + id++});
      $scope.model[1][0].push({label: 'Top middle'});

      $scope.model[1].push([]);
      $scope.model[1][1].push({label: 'Item ' + id++});
      $scope.model[1][1].push({label: 'Item ' + id++});
      $scope.model[1][1].push({label: 'Bottom middle'});

      $scope.model.push([]);

      $scope.model[2].push([]);
      $scope.model[2][0].push({label: 'Item ' + id++});
      $scope.model[2][0].push({label: 'Item ' + id++});
      $scope.model[2][0].push({label: 'Item ' + id++});
      $scope.model[2][0].push({label: 'Top right'});

      $scope.model[2].push([]);
      $scope.model[2][1].push({label: 'Item ' + id++});
      $scope.model[2][1].push({label: 'Bottom right'});


      $scope.$watch('model', function(model) {
          $scope.modelAsJson = angular.toJson(model, true);
      }, true);

  });


