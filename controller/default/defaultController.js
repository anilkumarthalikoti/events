"use strict";
define(['application-configuration', 'defaultService', 'alertsService'], function (app) {

    app.register.controller('defaultController', ['$scope', '$rootScope', 'defaultService', 'alertsService', 
        function ($scope, $rootScope,defaultService, alertsService ) {

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
                defaultService.login(user, $scope.loginCompleted, $scope.loginError);
               
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

function openLogin(){
 
$('#signup-modal').modal('hide');
$('#login-modal').modal('show');
}
function openSignUp(){
$('#login-modal').modal('hide');
$('#signup-modal').modal('show');
}