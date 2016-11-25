angular.module('BostonApp').factory('userFactory', ['localStorageService',
	function(localStorageService) {
		var userEntity = {
			username: '',
			logged: false
		};

		var existing = localStorageService.get('user');
		if (existing !== undefined && existing !== null && 'username') {
			var total = 0, matched = 0;
			for (var key in userEntity) {
				total++;
				if (key in existing)
					matched++;
			}
			if (total == matched)
				userEntity = existing;
		}

		userEntity.login = function() {
			userEntity.logged = true;
			localStorageService.set('user', {
				username: userEntity.username,
				logged: true
			});
			return userEntity;
		};

		userEntity.logout = function() {
			userEntity.logged = false;
			localStorageService.set('user', {
				username: userEntity.username,
				logged: false
			});
			return userEntity;
		};

		userEntity.isSignedIn = function() {
			return userEntity.logged;
		};

		userEntity.getUsername = function() {
			return userEntity.username;
		};

		userEntity.setUsername = function(username) {
			userEntity.username = username;
			localStorageService.set('user', {
				username: username,
				logged: userEntity.logged
			});
			return userEntity;
		};

		return userEntity;
	}
]);
