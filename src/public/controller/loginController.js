angular.module('BostonApp').controller('loginController', function($scope, userFactory, $location, $http) {
	$scope.submitForm = function(form) {
			if (form.$valid) {
				var data = $.param({
                username: $scope.userName,
                password: $scope.userPassword
            });
				$http({
				    url: "/api/userConnect", method: 'POST',
				    data: data,
				    headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
				}).then(
						function(response){
							if (response.data === null) {
								$scope.alerts = [
    							{ type: 'danger', msg: 'Mauvais Login ou Mot de passe !!!' },
								];
							}
							else{
								if( response.data !== 'not actived'){
									var login = userFactory.setUsername(response.data.username, response.data.roles).login();
									$location.url('/');
								}
								else{
									$scope.alerts = [
	    							{ type: 'danger', msg: 'Compte pas encore activer' },
									];
								}
							}
						}
				);
			} else {
					alert('Invalide');
			}
	};
			$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};
});
