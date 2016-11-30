angular.module('BostonApp').controller('searchController', function ($scope, $log) {

	 $scope.items = _.range(1,151);

	$scope.maxSize = 5;
	$scope.bigTotalItems =  $scope.items.length;
	$scope.CurrentPage = 1;
	$scope.itemsPerPage = 10;
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