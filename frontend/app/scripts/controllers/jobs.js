'use strict';
angular.module('psJwtApp').controller('JobsCtrl', function ($scope, $http, alert, $rootScope, baseUrl) {
    var url = baseUrl + 'jobs'
    $http.get(url).success(function (res) {
        $scope.Jobs = res;
    }).error(function (err) {
        alert('warning', 'Opps!', 'unAuthorized', 5000);
    })
});