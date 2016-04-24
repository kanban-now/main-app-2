'use strict';

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}



function getStormpathIdForUser(user) {
    var href = user.href;
    var lastSlash = href.lastIndexOf('/');
    var id = href.substring(lastSlash + 1, href.length);
    return id;
}

angular.module('dashboardApp').controller('tableController', function($scope, $filter, $http, ngTableParams) {

    var getArchivedCardsUri = 'api/archived-cards';

    $scope.errorGettingArchivedCardList = false;
    $scope.errorGettingArchivedCardListErrorMessage = "";
    var stormpathUserId = getStormpathIdForUser($scope.user);


    $scope.usersTable = new ngTableParams({
        page: 1,
        count: 10
    }, {
        total: 0,
        getData: function ($defer, params) {
            var pageNumber = params.page();
            $http.get('/api/archivedcards', {
                params: {stormpathUserId: stormpathUserId, pageNumber: pageNumber }
            }).success(function(returnedData) {
                $scope.data = returnedData.data;
                params.total(returnedData.pagingData.totalCount);
                $defer.resolve($scope.data);
            });
        }
    });

});


