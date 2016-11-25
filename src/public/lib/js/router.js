// create the module and name it routeApp
var routeApp = angular.module('BostonApp', ['ngRoute','LocalStorageModule']);

// configure our routes
routeApp.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
          templateUrl : '/view/home.html',
          controller : 'homeController'
        })
    // route for the login page
        .when('/user/login', {
            templateUrl : '/view/login.html',
            controller  : 'loginController'
        })
        // route for the register page
        .when('/register', {
            templateUrl : '/view/register.html',
            controller  : 'registerController'
        })
        // route for the logout page
        .when('/user/logout', {
            template: '',
            controller: 'logoutController'
        })
        // route for the home page
        .otherwise({
            redirectTo: '/'
        });
}).run(['$rootScope', 'localStorageService', '$location', 'userFactory',
    function($rootScope, localStorageService, $location, userFactory) {
      $rootScope.$on('$routeChangeStart', function(event) {
          if (!userFactory.isSignedIn())
              $location.path('/user/login');
          else if ($location.path() == '/user/login')
              event.preventDefault();
      });
    }
]);
