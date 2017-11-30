var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html',
        controller : 'homeController'
    })
    .when('/page1', {
        templateUrl : 'templates/page1.html',
        controller : 'page1Controller'
    })
});