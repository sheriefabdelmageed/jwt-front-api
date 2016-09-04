'use strict';

angular.module('psJwtApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
      $scope.isAuthenticated = function(){
        return authToken.isAuthenticated();
      } ;
  });
