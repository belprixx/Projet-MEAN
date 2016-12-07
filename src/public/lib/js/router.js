// create the module and name it routeApp
var routeApp = angular.module('BostonApp', ['ngRoute','LocalStorageModule', 'ui.bootstrap']);

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
        .when('/user/register', {
            templateUrl : '/view/register.html',
            controller  : 'registerController'
        })
        .when('/home', {
            templateUrl : '/view/home.html',
            controller  : 'homeController'
        })
        // route for the logout page
        .when('/user/logout', {
            template: '',
            controller: 'logoutController'
        })
        .when('/user/users', {
          templateUrl : '/view/users.html',
          controller : 'usersController'
        })

        // route for search
        .when('/user/search', {
          templateUrl : '/view/search.html',
          controller : 'searchController'
        })
        // route for crimes
        .when('/user/crimes', {
          templateUrl : '/view/crimes.html',
          controller : 'crimesController'
        })
        // route for the home page
        .otherwise({
            redirectTo: '/'
        });
}).run(['$rootScope', 'localStorageService', '$location', 'userFactory',
    function($rootScope, localStorageService, $location, userFactory) {
      $rootScope.$on('$routeChangeStart', function(event) {
          if($location.path() == "/register")
              $location.url('/register');
          else if ($location.path() == '/user/login' | !userFactory.isSignedIn())
              $location.path('/user/login');
      });
    }
]);
