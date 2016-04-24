'use strict';

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


angular.module('dashboardApp').controller('tableController', function($scope, $filter, $http, ngTableParams) {

    var getArchivedCardsUri = 'api/archived-cards';

    $scope.errorGettingArchivedCardList = false;
    $scope.errorGettingArchivedCardListErrorMessage = "";

    $scope.usersTable = new ngTableParams({
        page: 1,
        count: 10
    }, {
        total: 0,
        getData: function ($defer, params) {
            var pageNumber = params.page();
            $http.get('/api/archivedcards', {
                params: {pageNumber: pageNumber }
            }).success(function(returnedData) {
                $scope.data = returnedData;
                params.total(17)
                $defer.resolve($scope.data);
            });
        }
    });

});


