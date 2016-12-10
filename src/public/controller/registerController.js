angular.module('BostonApp').controller('registerController', function($scope, userFactory, $location, $http, $timeout) {
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
									if (response.data.message === "user added") {
										$scope.alerts = [
											{ type: 'success', msg: 'Votre demande a ete pris en compte. Un chef de la police doit valider votre compte' },
										];
										$timeout(function() {
								      $location.path('/user/login');
								      }, 3000);
									}
									else{
										$scope.alerts = [
											{ type: 'danger', msg: 'Une erreur est survenue, veuiller reessayer plus tard.' },
										];
									}
							}
					);
				}
			}
		};

		$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};

});
