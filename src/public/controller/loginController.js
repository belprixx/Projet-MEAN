angular.module('BostonApp').controller('loginController', function($scope, userFactory, $location) {
	$scope.submitForm = function(form) {
			if (form.$valid) {
					userFactory.setUsername($scope.userName).login();
					$location.url('/');
			} else {
					alert('Invalide');
			}
	};
});
