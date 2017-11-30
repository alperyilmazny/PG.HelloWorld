var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'templates/home.html',
        controller : 'homeController'
    })
    $routeProvider.when('/alper',{
        templateUrl : 'templates/home.html',
        controller : 'homeController'
    })
});