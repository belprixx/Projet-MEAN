angular.module('BostonApp').controller('usersController', function ($scope, $http, $timeout, $location, $route) {
  $http({
    url: "/api/userList", method: 'GET',
    data: "",
    headers : {}
  }).then(
      function(response){
        $scope.userList = response.data;
      }
  );

  $scope.modifRoles = function (userRoles, userId) {
    var data = $.param({
      roles : userRoles,
      id : userId,
    })
    $http({
      url: "/api/user/roles", method:'POST',
      data: data,
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    }).then(
        function(response){
          if (response.data.message === 'user updated') {

          }
          $scope.alerts = [
            { type: 'success', msg: "Le role de l'utilisateur a ete modifer et egalement son compte a ete acticver" },
          ];
          $timeout(function() {
            $route.reload();
          }, 3000);
        }
    );
  };

  $scope.Deleted = function (id_user) {
    var data = $.param({
      _id : id_user,
    })
    $http({
      url: "/api/user/Deleted", method:'POST',
      data: data,
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    }).then(
        function(response){
          if (response.data.message === 'user deleted') {
            $scope.alerts = [
              { type: 'success', msg: 'Utilisateur supprimer' },
            ];
            $timeout(function() {
              $route.reload();
            }, 3000);
          }
        }
    );
  };

});
