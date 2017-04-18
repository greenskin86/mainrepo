var app = angular.module('HolteProfesjonellApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        controller: "homeController",
        controllerAs: "ctrl",
        templateUrl: "/app/views/home-view.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        controllerAs: "ctrl",
        templateUrl: "/app/views/login-view.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        controllerAs: "ctrl",
        templateUrl: "/app/views/signup-view.html"
    });

    $routeProvider.when("/account", {
        controller: "accountController",
        controllerAs: "ctrl",
        templateUrl: "/app/views/account-view.html"
    });

    $routeProvider.otherwise({ redirectTo: "/" });
});

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    var self = this;
    self.authentication = authService.fillAuthData();
}]);