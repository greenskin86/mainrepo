'use strict';
app.controller('indexController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
    var self = this;

    self.authentication = authService.authentication;

}]);