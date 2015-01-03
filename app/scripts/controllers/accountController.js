"use strict";

app.controller('AccountController', function ($scope, $http, $location, $window, pageUrl, notifier) {
    $scope.login = function login(user, loginForm) {
        if (loginForm.$valid) {
            $http({
                method: 'POST',
                url: pageUrl + 'user/login',
                data: user
            })
                .success(function (data, status, headers, config) {
                    /*notifier.success('Welcome back ' + data.username);*/
                    sessionStorage.setItem('accessToken', JSON.stringify(data.access_token));
                    sessionStorage.setItem('tokenType',JSON.stringify(data.token_type));
                    sessionStorage.setItem('username', JSON.stringify(data.username));
                    $location.path('/home');
                    $window.location.reload();
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

    $scope.logout = function logout() {
        sessionStorage.clear();
        $location.path('/home');
        $window.location.reload();
    }
});