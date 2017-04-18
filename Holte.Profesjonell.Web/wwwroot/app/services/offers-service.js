'use strict';
app.factory('offersService', ['$http', function ($http) {

    self.serviceBase = 'http://localhost:50802/';
    self.ordersServiceFactory = {};

    self.getOffers = function () {
        //var authData = localStorageService.get('authorizationData');
        //$httpProvider.defaults.headers.post['Authorization'] = 'Bearer ' + authData.token;
        return $http.get(serviceBase + 'api/offers');
    };

    self.ordersServiceFactory.getOffers = self.getOffers;

    return self.ordersServiceFactory;

}]);