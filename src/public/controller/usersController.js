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

  $scope.NTM = function (yolo, toto) {
    var data = $.param({
      roles : yolo,
      id : toto,
    })
    $http({
      url: "/api/userList2", method:'POST',
      data: data,
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });
  };
  $scope.Delet = function (tata) {
    var data = $.param({
      id : tata,
    })
    $http({
      url: "/api/userDel", method:'POST',
      data: data,
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });

  };

});
