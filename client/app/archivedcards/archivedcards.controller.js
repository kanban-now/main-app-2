'use strict';

// angular.module('dashboardApp')
//   .controller('tableController', function ($scope) {
//     $scope.message = 'Hello';
//   });





function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


// angular.module('dashboardApp', ['ngTable'])
//     .controller('tableController', function ($scope) {
//         $scope.message = 'Hello';
//     });


angular.module('dashboardApp').controller('tableController', function($scope, $filter, $http, ngTableParams) {

    var getArchivedCardsUri = 'api/new-archived-cards';

    $scope.errorGettingArchivedCardList = false;
    $scope.errorGettingArchivedCardListErrorMessage = "";

    $scope.usersTable = new ngTableParams({
        page: 1,
        count: 10
    }, {
        total: 0,
        getData: function ($defer, params) {
            var pageNumber = params.page();
            if(pageNumber === 1) {
                $scope.data = [
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 1"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 2"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 3"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 4"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 5"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 6"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 7"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 8"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 9"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 10"},
                ]
            }
            else {
                $scope.data = [
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 10"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 11"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 12"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 13"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 14"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 15"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 16"},
                    {"boardId": 6, "date": "2016-01-20T02:48:43.331Z", "id": 57, "text": "Item 17"},
                ]

            }
            params.total(17)

            $defer.resolve($scope.data);
        }
    });

});



// angular.module('dashboardApp', ['ngTable']).controller('tableController', function($scope, $filter, $http, ngTableParams) {
//
//     var getArchivedCardsUri = 'api/new-archived-cards';
//
//     $scope.errorGettingArchivedCardList = false;
//     $scope.errorGettingArchivedCardListErrorMessage = "";
//
//     $scope.usersTable = new ngTableParams({
//         page: 1,
//         count: 10
//     }, {
//         total: 0,
//         getData: function ($defer, params) {
//
// //            $scope.data = response.data.data;
//             $scope.data = [
//                 {"boardId":6, "date":"2016-01-20T02:48:43.331Z", "id" : 57, "text": "Fix playing Lovejoys"},
//                 {"boardId":6, "date":"2016-01-20T02:49:02.110Z", "id" : 58, "text": "Buy more Duluth Trading Company underwear, Large"},
//             ]
//             params.total(2)
//
//         }
//     });
//
// });


