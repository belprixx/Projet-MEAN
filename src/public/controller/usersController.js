angular.module('BostonApp').controller('usersController', function ($scope, $http) {
  $http({
    url: "/api/userList", method: 'GET',
    data: "",
    headers : {}
  }).then(
      function(response){
        $scope.userList = response.data;
      }
  );
});
