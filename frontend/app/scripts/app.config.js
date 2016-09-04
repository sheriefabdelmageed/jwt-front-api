angular.module('psJwtApp').config(function ($urlRouterProvider, $stateProvider, $httpProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('main', {
        url: '/'
        , templateUrl: '/views/main.html'
    }).state('register', {
        url: '/register'
        , templateUrl: '/views/register.html'
        , controller: 'RegisterCtrl'
    }).state('jobs', {
        url: '/jobs'
        , templateUrl: '/views/jobs.html'
        , controller: 'JobsCtrl'
    }).state('logout', {
        url: '/logout'
        , controller: 'LogoutCtrl'
    })
    
    $httpProvider.interceptors.push('authInterceptor');
    
})
.constant('baseUrl', 'http://localhost:3000/')