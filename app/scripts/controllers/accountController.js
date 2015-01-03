"use strict";

app.controller('AccountController', function ($scope, $http, $location, pageUrl, notifier) {
    $scope.login = function login(user, loginForm) {
        if (loginForm.$valid) {
            $http({
                method: 'POST',
                url: pageUrl + 'user/login',
                data: user
            })
                .success(function (data, status, headers, config) {
                    /*notifier.success('Welcome back ' + data.username);*/
                    $location.path('/home');
                    console.log(data);
                })
                .error(function (data, status, headers, config) {
                    notifier.error('Incorrect username or password');
                    console.log(data);
                })
        } else {
            alert('Invalid username or password');
        }
    }

    $scope.register = function register(user, registrationForm) {
        if (registrationForm.$valid) {
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
        } else {
            alert('YNWA')
        }
    }
});