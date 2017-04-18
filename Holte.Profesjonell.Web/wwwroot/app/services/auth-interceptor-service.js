'use strict';
app.factory('authInterceptorService', ['$q', '$location', 'localStorageService', function ($q, $location, localStorageService) {
    var self = this;
    self.authInterceptorServiceFactory = {};

    self.request = function (config) {

        config.headers = config.headers || {};

        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        //config.headers['Content-Type'] = 'application/json';
        //config.headers['Accept'] = 'application/json';

        return config;
    }

    self.responseError = function (rejection) {
        if (rejection.status === 401) {
            $location.path('/login');
        }
        return $q.reject(rejection);
    }

    self.authInterceptorServiceFactory.request = self.request;
    self.authInterceptorServiceFactory.responseError = self.responseError;

    return self.authInterceptorServiceFactory;
}]);