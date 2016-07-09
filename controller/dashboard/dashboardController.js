"use strict";
define(['application-configuration', 'dashboardServices', 'alertsService'], function (app) {
alert('dashboad controller');
    app.register.controller('dashboardController', ['$scope', '$rootScope', 'dashboardServices', 'alertsService',
        function ($scope, $rootScope, dashboardServices, alertsService) {

            $rootScope.closeAlert = alertsService.closeAlert;
            $rootScope.alerts = [];

            $scope.initializeController = function () {
               
                 $rootScope.applicationModule="dashboard";

            }

            

        }]);
});
