'use strict';
app.controller('loginController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
    var self = this;
    self.loginData = {
        userName: "",
        password: ""
    };

    self.message = "";

    self.login = function () {
        authService.login(self.loginData).then(function (response) {
            $location.path('/account');
        },
        function (err) {
            self.message = err.error_description;
        });
    };

}]);