'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('archivedcards', {
        url: '/archivedcards',
        templateUrl: 'app/archivedcards/archivedcards.html',
        controller: 'tableController',
          sp: {
              authenticate: true
          }
      });
  });