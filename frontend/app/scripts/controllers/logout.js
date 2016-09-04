'use strict';

angular.module('psJwtApp')
  .controller('LogoutCtrl', function ($scope, authToken, $state) {
    authToken.removeToken();
    $state.go('main');
  });
