// create the module and name it routeApp
var routeApp = angular.module('BostomApp', ['ngRoute']);

// configure our routes
routeApp.config(function($routeProvider) {
    $routeProvider

        // route for the login page
        .when('/login', {
            templateUrl : '/view/login.html',
            controller  : 'loginController'
        })

        // route for the register page
        .when('/register', {
            templateUrl : '/view/register.html',
            controller  : 'registerController'
        })

        .when('/home', {
            templateUrl : '/view/home.html',
            controller  : 'homeController'
        })   

        // route for the about page
        .otherwise({
            redirectTo: '/login'
        });
});
