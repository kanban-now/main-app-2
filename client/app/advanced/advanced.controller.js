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

      // Initialize model
      var id = 10;
      for (var i = 0; i < 3; ++i) {
          $scope.model.push([]);
          for (var j = 0; j < 2; ++j) {
              $scope.model[i].push([]);
              for (var k = 0; k < 7; ++k) {
                  $scope.model[i][j].push({label: 'Item ' + id++});
              }
          }
      }

      $scope.$watch('model', function(model) {
          $scope.modelAsJson = angular.toJson(model, true);
      }, true);

  });


