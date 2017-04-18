'use strict';
app.controller('signupController',
    [
        '$scope', '$location', '$timeout', 'authService',
        function($scope, $location, $timeout, authService) {
            var self = this;
            self.savedSuccessfully = false;
            self.message = "";

            self.registration = {
                userName: "",
                password: "",
                confirmPassword: ""
            };

            self.signUp = function () {

                authService.saveRegistration(self.registration).then(function (response) {

                        self.savedSuccessfully = true;
                        self.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
                        self.startTimer();

                    },
                    function (response) {
                        var errors = [];
                        for (var key in response.data.modelState) {
                            for (var i = 0; i < response.data.modelState[key].length; i++) {
                                errors.push(response.data.modelState[key][i]);
                            }
                        }
                        self.message = "Failed to register user due to:" + errors.join(' ');
                    });
            };

            self.startTimer = function () {
                var timer = $timeout(function () {
                    $timeout.cancel(timer);
                    $location.path('/login');
                }, 2000);
            }
        }
    ]);