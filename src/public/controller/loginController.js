angular.module('BostonApp').controller('loginController', function($scope, userFactory, $location) {
	$scope.submitForm = function(form) {
			if (form.$valid) {
<<<<<<< HEAD
					userFactory.setUsername($scope.userName).login();
=======
				var login = userFactory.setUsername($scope.userName).login();
>>>>>>> 96afc8e1ecdf9e094c173ec7da823856bfd39afe
					$location.url('/');
			} else {
					alert('Invalide');
			}
	};
});
