angular.module('BostonApp').controller('logoutController', function($scope, userFactory, $location) {
  userFactory.logout();
  $location.path('/');
});
