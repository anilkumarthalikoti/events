/// <reference path="Scripts/ui-bootstrap-tpls-0.11.0.js" />
/// <reference path="Scripts/ui-bootstrap-tpls-0.11.0.js" />
/// <reference path="Scripts/ui-bootstrap-tpls-0.11.0.js" />
require.config({

    baseUrl: "",

    // alias libraries paths
    paths: {
        'application-configuration': 'js/application-configuration', 
        'jquery' : 'js/jquery-1.9.1',
	'angular': 'js/angular',
        'angular-route': 'js/angular-route',
        'angularAMD': 'js/angularAMD',
        'ui-bootstrap' : 'js/ui-bootstrap-tpls-0.11.0',
        'blockUI': 'js/angular-block-ui',
        'ngload': 'js/ngload',
        'charts':'js/charts',
	'angular-resource': 'js/angular-resource',
	'modernizr-2.6.2.min':'js/modernizr-2.6.2.min',
	'defaultService': 'services/DefaultServices',
        'mainService': 'services/MainServices',
        'ajaxService': 'services/AjaxServices',
        'alertsService': 'services/AlertsServices',
        'accountsService': 'services/AccountsServices',
        'userServices':'services/UserServices',
        'customersService': 'services/CustomersServices',
        'ordersService': 'services/OrdersServices',
        'productsService': 'services/ProductsServices',
        'dataGridService': 'services/DataGridService',
        'angular-sanitize': 'js/angular-sanitize',
        'customersController': 'Views/Shared/CustomersController',
        'productLookupModalController': 'Views/Shared/ProductLookupModalController'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'blockUI': ['angular'],
        'angular-sanitize': ['angular'],
        'ui-bootstrap': ['angular'],
	'jquery':['angular']
         
    },

    // kick start application
    deps: ['application-configuration']
});
