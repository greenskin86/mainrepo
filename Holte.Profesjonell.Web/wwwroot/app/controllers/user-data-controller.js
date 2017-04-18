//(function() {

//    'use strict';
//    angular.module("HolteProfesjonellApp")
//        .controller("userDataController", userDataController);

//    function userDataController($scope, authService) {
//        var self = this;
//        self.userData = authService.fillAuthData();
//    };
//})();
app.controller('userDataController', ['$scope', 'authService', '$location', function ($scope, authService, $location) {
    var self = this;
    self.userData = authService.fillAuthData();
    self.test = 'Gówno!';

    self.logOut = function () {
        authService.logOut();
        $location.path('/');
    }
}]);