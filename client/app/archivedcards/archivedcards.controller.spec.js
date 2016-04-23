'use strict';

describe('Controller: ArchivedcardsCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var ArchivedcardsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArchivedcardsCtrl = $controller('ArchivedcardsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
