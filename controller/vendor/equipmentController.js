"use strict";
define(['application-configuration', 'userServices', 'alertsService'], function (app) {

    app.register.controller('loginController', ['$scope', '$rootScope', 'userServices', 'alertsService',
        function ($scope, $rootScope, userServices, alertsService) {

            $rootScope.closeAlert = alertsService.closeAlert;
            $rootScope.alerts = [];

            $scope.initializeController = function () {
               
                $scope.UserName = "";               
                $scope.Password = "";

                //alertsService.RenderSuccessMessage("Please register if you do not have an account.");

            }

            $scope.login = function () {
                $rootScope.IsloggedIn = false;
                var user = $scope.createLoginCredentials();
                userServices.login(user, $scope.loginCompleted, $scope.loginError);
               
            }

            $scope.loginCompleted = function (response) {
            var data=JSON.parse(JSON.stringify(response))[0];
          if(data.loginPwd!=$scope.Password){
               alertsService.RenderErrorMessage("Invalid Credentials");
          }else{
              $rootScope.IsloggedIn=true;
              $rootScope.userDetails=data;
              $rootScope.applicationModule="dashboard";    
                window.location = "applicationMasterPage.html#/dashboard/dashboard";
            }
            }

            $scope.loginError = function (response) {

                alertsService.RenderErrorMessage("response.ReturnMessage","Unable to process login");
        
                $scope.clearValidationErrors();
                alertsService.SetValidationErrors($scope, response.ValidationErrors);              

            }

            $scope.clearValidationErrors = function () {
              
                $scope.UserNameInputError = false;               
                $scope.PasswordInputError = false;               

            }

            $scope.createLoginCredentials = function () {

                var user = new Object();
               
                user.UserName = $scope.UserName;              
                user.Password = $scope.Password;
             
                return user;

            }

        }]);
});
