angular.module('BostonApp').controller('crimesController', function ($scope, $http, $location) {
  $scope.submitForm = function(form) {
    if (form.$valid) {
      var data = $.param({
        compnos: $scope.compnos,
        naturecode: $scope.natureCode,
        incident_type_description: $scope.incident,
        main_crimecode: $scope.crimeCode,
        reptdistrict: $scope.district,
        reportingarea: $scope.area,
        fromdate: $scope.date,
        weapontype: $scope.weapon,
        shooting: $scope.shooting,
        domestic: $scope.domestic,
        shift: $scope.shift,
        year: $scope.year,
        month: $scope.month,
        day_week: $scope.day_week,
        ucrpart: $scope.ucrpart,
        x: $scope.x,
        y: $scope.y,
        streetname: $scope.streetname,
        xstreetname: $scope.xstreetname,
        location: $scope.location

      });
      $http({
        url: "/api/add", method: 'POST',
        data: data,
        headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
      }).then(
          function(response){
            alert("Crime ajoutée");
            $location.url('/user/search');
          }
      );
    } else {
      alert('Invalide');
    }
  };

  ///!!!!!\ MODIFIER FONCTIONS EN DESSOUS POUR UPDATE
  //
  //

  $scope.submitUpdateForm = function(form) {
    if (form.$valid) {
      var data = $.param({
        _id: $scope._id,
        compnos: $scope.compnos,
        naturecode: $scope.natureCode,
        incident_type_description: $scope.incident,
        main_crimecode: $scope.crimeCode,
        reptdistrict: $scope.district,
        reportingarea: $scope.area,
        fromdate: $scope.date,
        weapontype: $scope.weapon,
        shooting: $scope.shooting,
        domestic: $scope.domestic,
        shift: $scope.shift,
        year: $scope.year,
        month: $scope.month,
        day_week: $scope.day_week,
        ucrpart: $scope.ucrpart,
        x: $scope.x,
        y: $scope.y,
        streetname: $scope.streetname,
        xstreetname: $scope.xstreetname,
        location: $scope.location

      });
      $http({
        url: "/api/update", method: 'POST',
        data: data,
        headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
      }).then(
          function(response){
            alert("Crime updated");
            $location.url('/user/search');
          }
      );
    } else {
      alert('Invalide');
    }
  };
  
});

