// create the module and name it routeApp
var routeApp = angular.module('BostomApp', ['ngRoute']);

// configure our routes
routeApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/login', {
            templateUrl : '/view/login.html',
            controller  : 'loginController'
        })

        // route for the contact page
        .when('/register', {
            templateUrl : '/view/register.html',
            controller  : 'registerController'
        })

        // route for the about page
        .otherwise({
            redirectTo: '/login'
        });
});
