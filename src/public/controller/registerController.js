angular.module('BostonApp').controller('registerController', function($scope, userFactory, $location, $http) {
	$scope.submitForm = function(form) {
			if (form.$valid) {
				if($scope.password === $scope.ConfirmPassword){
					let data = $.param({
							userName: $scope.userName,
							passWord: $scope.password
					});
					$http({
						url: "/api/userRegister", method: 'POST',
				    data: data,
				    headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
					}).then(
								function(response){
										console.log("cc");
								}
					);
				}
			}
		};
});
