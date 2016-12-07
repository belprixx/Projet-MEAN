angular.module('BostonApp').controller('loginController', function($scope, userFactory, $location, $http) {
	$scope.submitForm = function(form) {
			if (form.$valid) {

				var data = $.param({
					      username: $scope.userName,
                password: $scope.userPassword
            });
				var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
              }
        }
				
				$http.post('/api/userTEST', data, config)
				.then(
						function(response){
							console.log(response);
								var PostDataResponse = response;
								console.log(PostDataResponse[0]);
								var login = userFactory.setUsername(PostDataResponse[0].username, PostDataResponse[0].roles).login();
										$location.url('/');
					 });
			} else {
					alert('Invalide');
			}
	};
});
