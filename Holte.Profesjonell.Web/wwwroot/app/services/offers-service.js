'use strict';
app.factory('offersService', ['$http', function ($http) {

    self.serviceBase = 'http://localhost:50802/';
    self.ordersServiceFactory = {};

    self.getOffers = function () {

        return $http.get(serviceBase + 'api/offers').then(function (results) {
            return results;
        });
    };

    self.ordersServiceFactory.getOffers = self.getOffers;

    return self.ordersServiceFactory;

}]);