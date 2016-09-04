'use strict';
angular.module('psJwtApp').service('alert', function ($rootScope, $timeout) {
    return function (type, title, message, timeOut) {
        // var alertTimeOut;
        $rootScope.alert = {
            hasBeenShown: true
            , show: true
            , type: type
            , title: title
            , message: message
        };
        //$timeout.cancel(alertTimeOut);
        /* alertTimeOut =*/
        $timeout(function () {
            $rootScope.alert.show = false;
        }, timeOut || 2000)
    }
});