angular.module('BostonApp').controller('searchController', function ($scope, $http) {

	$http.get("/api/showAll")
		.then(function(response) {
			var test = response.data;
			$scope.items = test;
			$scope.maxSize = 5;
			$scope.bigTotalItems =  $scope.items.length;
			$scope.itemsPerPage = 7;
			$scope.currentPage = 1;

			$scope.pageCount = function () {
				return Math.ceil($scope.items.length / $scope.itemsPerPage);
			};

			$scope.$watch('currentPage + itemsPerPage', function() {
				var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
				end = begin + $scope.itemsPerPage;

			$scope.filtereditems = $scope.items.slice(begin, end);
			});
		});

	$scope.searchCrime = function(key, value) {
		var data = $.param({
			crimeKey: key,
			crimeValue: value
		});
		if (data === "crimeKey=&crimeValue=") {
			$http.get("/api/showAll")
				.then(function(response) {
					var test = response.data;
					$scope.items = test;
					$scope.maxSize = 5;
					$scope.bigTotalItems =  $scope.items.length;
					$scope.itemsPerPage = 7;
					$scope.currentPage = 1;

					$scope.pageCount = function () {
						return Math.ceil($scope.items.length / $scope.itemsPerPage);
					};

					$scope.$watch('currentPage + itemsPerPage', function() {
						var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
							end = begin + $scope.itemsPerPage;

						$scope.filtereditems = $scope.items.slice(begin, end);
					});
				});
		}
		else {
			$http({
				url: "/api/search", method: 'POST',
				data: data,
				headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			}).then(
				function (response) {
					var test = response.data;
					$scope.items = test;
					$scope.maxSize = 5;
					$scope.bigTotalItems = $scope.items.length;
					$scope.itemsPerPage = 7;
					$scope.currentPage = 1;

					$scope.pageCount = function () {
						return Math.ceil($scope.items.length / $scope.itemsPerPage);
					};

					$scope.$watch('currentPage + itemsPerPage', function () {
						var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
							end = begin + $scope.itemsPerPage;

						$scope.filtereditems = $scope.items.slice(begin, end);
					});
				}
			);
		}
	}

});
