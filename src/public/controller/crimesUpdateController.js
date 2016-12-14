angular.module('BostonApp').controller('crimesUpdateController', function($scope, userFactory, $location, $routeParams, $http, $timeout) {
  var data = $.param({
    id: $routeParams.crimeId,
  })
  $http({
    url: "/api/find/crime", method:'POST',
    data: data,
    headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
  }).then(
      function(response){
        $scope._id = response.data._id;
        $scope.compnos = response.data.compnos;
        $scope.natureCode = response.data.naturecode;
        $scope.incident = response.data.incident_type_description;
        $scope.crimeCode = response.data.main_crimecode;
        $scope.district = response.data.reptdistrict;
        $scope.area = response.data.reportingarea;
        $scope.date = response.data.fromdate;
        $scope.weapon = response.data.weapontype;
        $scope.shooting = response.data.shooting;
        $scope.domestic = response.data.domestic;
        $scope.shift = response.data.shift;
        $scope.year = response.data.year;
        $scope.month = response.data.month;
        $scope.day_week = response.data.day_week;
        $scope.ucrpart = response.data.ucrpart;
        $scope.x = response.data.x;
        $scope.y = response.data.y;
        $scope.streetname = response.data.streetname;
        $scope.xstreetname = response.data.xstreetname;
        $scope.location = response.data.location;
    }
  );
  $scope.submitForm = function(form) {
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
            $scope.alerts = [
              { type: 'success', msg: 'Le crime a bien été modifier' },
            ];
            $timeout(function() {
              console.log("cc");
              $location.path('/user/search');
            }, 2000);
        }
      );
  };
});
