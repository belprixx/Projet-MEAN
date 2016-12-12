angular.module('BostonApp').controller('headerController', function($scope, userFactory) {
    $scope.$watch(function() {
        return userFactory.isSignedIn();
    }, function(logged) {
        $scope.hello = 'Hello';
        $scope.grade = 'Grade:'
        $scope.connected = logged;

        if (logged)
          {
            $scope.hello += ' ' + userFactory.getUsername();
            $scope.grade += ' ' + userFactory.getRole();
          }
    });
});
