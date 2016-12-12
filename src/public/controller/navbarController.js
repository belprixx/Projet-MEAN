angular.module('BostonApp').controller('headerController', function($scope, userFactory) {
    $scope.$watch(function() {
        return userFactory.isSignedIn();
    }, function(logged) {
        $scope.connected = logged;
    });
});
