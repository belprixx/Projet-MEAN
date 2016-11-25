angular.module('BostonApp').controller('loginController', function($scope, userFactory, $location) {
	$scope.submitForm = function(form) {
			if (form.$valid) {
				var login = userFactory.setUsername($scope.userName).login();
					$location.url('/');
			} else {
					alert('Invalide');
			}
	};
});
