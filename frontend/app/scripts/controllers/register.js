'use strict';
angular.module('psJwtApp').controller('RegisterCtrl', function ($scope, $http, $rootScope, alert, authToken, baseUrl, $state) {
  $scope.submit = function () {
    var url = baseUrl + 'register';
    var user = {
      name: 'Sherief'
    };
    $http.post(url, user).success(function (res) {
      alert('success', res.result, 'you are now registered ', 5000);
      authToken.setToken(res.token);
      $state.go('main');
    }).error(function (err) {
      alert('warning', 'Opps!', 'you are not registered', 5000);
    })
  }
});
