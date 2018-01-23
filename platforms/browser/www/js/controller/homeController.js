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