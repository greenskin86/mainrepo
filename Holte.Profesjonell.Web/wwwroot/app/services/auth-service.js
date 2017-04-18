'use strict';
app.factory('authService', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {
    var self = this;
    self.serviceBase = 'http://localhost:50802/';
    self.authServiceFactory = {};

    self.authentication = {
        isAuth: false,
        userName: ''
    };

    self.saveRegistration = function(registration) {
        self.logOut();

        return $http.post(self.serviceBase + 'api/account/register', registration).then(function(response) {
            return response;
        });
    };

    self.login = function(loginData) {
        var data = 'grant_type=password&username=' + loginData.userName + '&password=' + loginData.password;

        var deferred = $q.defer();

        $http.post(self.serviceBase + 'token', data,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response) {
            localStorageService.set('authorizationData',
            {
                token: response.data.access_token,
                userName: loginData.userName
            });
            self.authentication.isAuth = true;
            self.userName = loginData.userName;
            deferred.resolve(response);
        }, function(err) {
            self.logOut();
            deferred.reject(err);
        });

        return deferred.promise;
    };

    self.logOut = function() {
        localStorageService.remove('authorizationData');
        self.authentication.isAuth = false;
        self.authentication.userName = '';
    };

    self.fillAuthData = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            self.authentication.isAuth = true;
            self.authentication.userName = authData.userName;
        }

        return self.authentication;
    };

    self.authServiceFactory.saveRegistration = self.saveRegistration;
    self.authServiceFactory.login = self.login;
    self.authServiceFactory.logOut = self.logOut;
    self.authServiceFactory.fillAuthData = self.fillAuthData;
    self.authServiceFactory.authentication = self.authentication;

    return self.authServiceFactory;
}]);