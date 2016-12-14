angular.module('BostonApp').controller('searchController', function ($scope, $http, $timeout, $route) {

	var test = "";

	$http.get("/api/showAll")
		.then(function(response) {
			test = response.data;
	$scope.items = test;
	$scope.maxSize = 5;
	$scope.bigTotalItems =  $scope.items.length;
	$scope.itemsPerPage = 7;
	$scope.currentPage = 1;

	$scope.pageCount = function () {
		return Math.ceil($scope.items.length / $scope.itemsPerPage);
	};

	$scope.deletedCrime = function (id_crime) {
		var data = $.param ({
			_id: id_crime
		});

		$http({
			url: "/api/delete", method:'POST',
			data: data,
			headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
		}).then(
				function(response){
					if (response.data === 'Deleted') {
					$scope.alerts = [
						{ type: 'success', msg: "Le crime a été supprimer" },
					];
					$timeout(function() {
						$route.reload();
					}, 3000);
				}
			}
		);
	};

	$scope.$watch('currentPage + itemsPerPage', function() {
		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
			end = begin + $scope.itemsPerPage;

		$scope.filtereditems = $scope.items.slice(begin, end);
	});
		});
});
