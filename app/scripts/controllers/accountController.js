/**
 * Created by Pecata on 31.12.2014 г..
 */
"use strict";

app.controller('AccountController', function ($scope, notifier) {
    function AccountController($scope, accountData){
        $scope.loginData = accountData.login(function (resp) {
            $scope.user = resp;
        });
        $scope.registerData = accountData.register(function (resp) {
            $scope.user = resp;
        });
    }
});