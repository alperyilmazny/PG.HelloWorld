var myPhoneGapApp = angular.module('MyPhoneGapApp',[]);

//var myPhoneGapApp = angular.module('MyPhoneGapApp',['ngRoute']);

// myPhoneGapApp.config(function($routeProvider, $compileProvider){
//     $routeProvider
//     .when('/', {
//         templateUrl : 'templates/pages/home.html',
//         controller : 'homeController'
//     })
//     .when('/page1', {
//         templateUrl : 'templates/pages/page1.html',
//         controller : 'page1Controller'
//     })
//     .when('/page2', {
//         templateUrl : 'templates/pages/page2.html',
//         controller : 'page2Controller'
//     });;

//     $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    
// });

myPhoneGapApp.controller('homeController',['$scope', function($scope) {
    
    /**
    * Battery change event handler
    * @param {*} status 
    */
   $scope.onBatteryStatus = function (status) {
       alert("Level: " + status.level + " isPlugged: " + status.isPlugged)
       console.log("Level: " + status.level + " isPlugged: " + status.isPlugged)
       
       $scope.deviceBatteryInfo.level = status.level;
       $scope.$apply();
   };

   /**
    * Device ready event handler
    */
   $scope.onDeviceReady = function () {
       console.log("device", device);
       console.log("navigator", navigator);
       window.addEventListener("batterystatus", $scope.onBatteryStatus, false);

       // Set device info
       if (window.device) $scope.deviceInfo = window.device;
       $scope.$apply();
   };

   /**
    * Binds events
    */
   $scope.bindEvents = function () {
       window.addEventListener('deviceready', $scope.onDeviceReady, false);
       
   };
   
   $scope.setPageData = function() {
       // Current page name
       $scope.currentPageName = "Home";
       $scope.deviceInfo = {};
       $scope.deviceBatteryInfo = {};
   };

   this.init = function () {

       // Sets page data
       $scope.setPageData();

       // Binds events
       $scope.bindEvents();
       
   };

   this.init();
}]);