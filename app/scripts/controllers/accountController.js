"use strict";

app.controller('AccountController', function ($scope, accountData) {
    $scope.login = function (user, loginForm) {
        accountData.login(function (resp) {
            $scope.loginData = resp;
        }, user, loginForm)
    };

    $scope.register = function (user, registerForm) {
        accountData.register(function (resp) {
            $scope.registerData = resp;
        }, user, registerForm)
    };
});