'use strict';
app.controller('accountController', ['$scope', 'authService', '$location', 'offersService', function ($scope, authService, $location, offersService) {
    var self = this;
    self.authentication = authService.authentication;
    if (!self.authentication.isAuth) {
        $location.path('/login');
        return;
    }

    offersService.getOffers().then(function(result) {
        self.offers = result.data;
    });
}]);