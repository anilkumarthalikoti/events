
define(['application-configuration'], function (app) {

    app.register.service('ajaxService', ['$http', 'blockUI', function ($http, blockUI) {

        // setting timeout of 1 second to simulate a busy server.
var baseurl="http://localhost:8080/event/";
        this.AjaxPost = function (params, route, successFunction, errorFunction) {
            route=baseurl+route;
        var conf=    {
       url:route,
       method:"POST",
       async:true,
        dataType : 'jsonp',   //you may use jsonp for cross origin request
        crossDomain:true,
    data:JSON.stringify(params)
            };
            blockUI.start();
            setTimeout(function () {
                $http(conf).success(function (response, status, headers, config) {
                    blockUI.stop();
                    successFunction(response, status);
                }).error(function (response) {
                    blockUI.stop();                   
                    if (response.IsAuthenicated == false) { window.location = "/index.html"; }
                    errorFunction(response);
                });
            }, 1000);

        }

        this.AjaxPostWithNoAuthenication = function (data, route, successFunction, errorFunction) {
		route=baseurl+route;
               
                  var conf=    {
       url:route,
       method:"POST",
       datatype:'jsonp',
       headers: {
                  'Authorization': 'Basic dGVzdDp0ZXN0',
                  'Content-Type': 'application/x-www-form-urlencoded'
       },
       data:JSON.stringify(data)
   };
 
            blockUI.start();
            setTimeout(function () {
                $http.post(conf, JSON.stringify(data)).success(function (response, status, headers, config) {
                    blockUI.stop();
                    successFunction(response, status);
                }).error(function (response) {
                    blockUI.stop();                 
                    errorFunction(response);
                });
            }, 1000);

        }

        this.AjaxGet = function (route, successFunction, errorFunction) {
            blockUI.start();
			route=baseurl+route;
            setTimeout(function () {
                $http({ method: 'GET', url: route }).success(function (response, status, headers, config) {
                    blockUI.stop();
                    successFunction(response, status);
                }).error(function (response) {
                    blockUI.stop();
                    if (response.IsAuthenicated == false) { window.location = "/index.html"; }
                    errorFunction(response);
                });
            }, 1000);

        }

        this.AjaxGetWithData = function (data, route, successFunction, errorFunction) {
            blockUI.start();
			route=baseurl+route;
            setTimeout(function () {
                $http({ method: 'GET', url: route, params: data }).success(function (response, status, headers, config) {
                    blockUI.stop();
                    successFunction(response, status);
                }).error(function (response) {
                    blockUI.stop();
                    if (response.IsAuthenicated == false) { window.location = "/index.html"; }
                    errorFunction(response);
                });
            }, 1000);

        }


        this.AjaxGetWithNoBlock = function (data, route, successFunction, errorFunction) {     
route=baseurl+route;		
            setTimeout(function () {
                $http({ method: 'GET', url: route, params: data }).success(function (response, status, headers, config) {                 
                    successFunction(response, status);
                }).error(function (response) {                  ;
                    if (response.IsAuthenicated == false) { window.location = "/index.html"; }
                    errorFunction(response);
                });
            }, 0);

        }


    }]);
});


