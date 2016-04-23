'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('archivedcards', {
        url: '/archivedcards',
        templateUrl: 'app/archivedcards/archivedcards.html',
        controller: 'ArchivedcardsCtrl'
      });
  });