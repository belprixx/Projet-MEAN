// create the module and name it routeApp
var routeApp = angular.module('routeApp', ['ngRoute']);

// configure our routes
routeApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        // route for the contact page
        .when('/register', {
            templateUrl : 'register.html',
            controller  : 'registerController'
        })
        // route for the display
        .when('/display', {
            templateUrl : 'display.html',
            controller  : 'displayController'
        })

        // route for the about page
        .otherwise({
            redirectTo: '/'
        });
});

// create the controller and inject Angular's $scope
routeApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

routeApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

routeApp.controller('registerController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

routeApp.controller('displayController', function($scope) {
    $scope.message = 'Display is fun';
});