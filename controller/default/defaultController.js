"use strict";
define(['application-configuration', 'defaultService', 'alertsService'], function (app) {

    app.register.controller('defaultController', ['$scope', '$rootScope', 'defaultService', 'alertsService', 
        function ($scope, $rootScope,defaultService, alertsService ) {
 
    	  $scope.myInterval = 3000;
    	  $scope.slides = [
    	    {
    	      image: 'img/img1.jpg'
    	    },
    	    {
    	      image: 'img/img2.jpg'
    	    },
    	    {
    	      image: 'img/img3.jpg'
    	    },
    	    {
    	      image: 'img/img4.jpg'
    	    }
    	  ];   	
    	
    	
            $rootScope.closeAlert = alertsService.closeAlert;
            $rootScope.alerts = [];
$scope.email = "anil2k12@gmail.com";               
                $scope.password = "anil123$";
            $scope.initializeController = function () {
               
                $scope.email = "anil2k12@gmail.com";               
                $scope.password = "anil123$";

                //alertsService.RenderSuccessMessage("Please register if you do not have an account.");

            }

            $scope.login = function () {
                $rootScope.IsloggedIn = false;
                var user = $scope.createLoginCredentials();
                defaultService.getStates(function(suc){
                    alert(suc);
                },function(fail){});
               // defaultService.login(user, $scope.loginCompleted, $scope.loginError);
               
            }

            $scope.loginCompleted = function (response) {
                alert(response);
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
               
                user.userName = $scope.email;              
                user.password = $scope.password;
                user.businessTypeCode='BQH';
                return user;

            }

			 


			
			
        }]);
});

function openLogin(){
 
            //alert('pigon');
//$('#loginModal').modal('show');
}
function openSignUp(){
 
//$('#signupModal').fadeIn();
}