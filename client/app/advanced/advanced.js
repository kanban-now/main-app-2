'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('advanced', {
        url: '/advanced',
        templateUrl: 'app/advanced/advanced.html',
        controller: 'AdvancedCtrl',
          sp: {
              authenticate: true
          }
      });
  });