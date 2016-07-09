define(['application-configuration', 'ajaxService'], function (app) {

    app.register.service('defaultService', ['ajaxService', function (ajaxService) {

        this.registerUser = function (user, successFunction, errorFunction) {
            ajaxService.AjaxPostWithNoAuthenication(user, "login", successFunction, errorFunction);
        };

        this.login = function (user, successFunction, errorFunction) {
             
            ajaxService.AjaxPost(user, "login", successFunction, errorFunction);
        };

        this.getUser = function (successFunction, errorFunction) {
            ajaxService.AjaxGet("/api/user/GetUser", successFunction, errorFunction);
        };        

        this.updateUser = function (user, successFunction, errorFunction) {
            ajaxService.AjaxPost(user, "/api/user/UpdateUser", successFunction, errorFunction);
        };

		this.getStates = function (successFunction, errorFunction) {
            ajaxService.AjaxGet("states", successFunction, errorFunction);
        };
		
		
    }]);
});

