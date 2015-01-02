/**
 * Created by Pecata on 31.12.2014 г..
 */
"use strict";

app.controller('AccountController', function ($scope, $http, pageUrl, notifier) {
    $scope.login = function login(user) {
        $http({
            method: 'POST',
            url: pageUrl + 'user/login',
            data: user
        })
            .success(function (data, status, headers, config) {
                notifier.success('Welcome back ');
                    console.log(data);
            })
            .error(function (data, status, headers, config) {
                notifier.error('Incorrect username or password');
                console.log(data);
            })
    }

    $scope.register = function register(user) {
        $http({
            method: 'POST',
            url: pageUrl + 'user/register',
            data: user
        })
            .success(function (data, status, headers, config) {
                notifier.success('Successfully registered ');
                console.log(data);
            })
            .error(function (data, status, headers, config) {
                notifier.error('Fill all the required fields with correct data.');
                console.log(data);
            })
    }
});