angular.module('BostonApp').factory('userFactory', ['localStorageService',
	function(localStorageService) {
		var userEntity = {
			username: '',
			userRole: '',
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
				userRole: userEntity.userRole,
				logged: true
			});
			return userEntity;
		};

		userEntity.logout = function() {
			userEntity.logged = false;
			localStorageService.set('user', {
				username: userEntity.username,
				userRole: userEntity.userRole,
				logged: false
			});
			return userEntity;
		};

		userEntity.isSignedIn = function() {
			return userEntity.logged;
		};

		userEntity.isAdmin = function () {
			return (userEntity.userRole == 'chef de la police')
		}

		userEntity.isStaff = function () {
			return (userEntity.userRole == 'chef de la police' || userEntity.userRole == 'Detective')
		}

		userEntity.getUsername = function() {
			return userEntity.username;
		};

		userEntity.getRole = function() {
			return userEntity.userRole;
		};

		userEntity.setUsername = function(username, user_role) {
			userEntity.username = username;
			userEntity.userRole = user_role;
			localStorageService.set('user', {
				username: username,
				userRole: user_role,
				logged: userEntity.logged
			});
			return userEntity;
		};

		return userEntity;
	}
]);
