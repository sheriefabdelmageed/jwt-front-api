'use strict';
angular.module('psJwtApp').factory('authToken', function ($window) {
    var storage = $window.localStorage;
    var cashedToken;
    var setToken = function (token) {
        cashedToken = token;
        storage.setItem('userToken', token);
    }
    var getToken = function () {
        if (!cashedToken) cashedToken = storage.getItem('userToken');
        return cashedToken;
    }
    var isAuthenticated = function () {
        return !!getToken();
    }
    var removeToken = function(){
        cashedToken = null;
        storage.removeItem('userToken');
    }
    return  {
        setToken: setToken
        , getToken: getToken
        , isAuthenticated: isAuthenticated,
        removeToken: removeToken
    }
    
});