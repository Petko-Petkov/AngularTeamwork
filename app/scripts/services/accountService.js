"use strict";

app.factory('accountData',
    function ($http, $location, $window, pageUrl, notifier) {

        function login(success, user, loginForm) {
            if (loginForm.$valid) {
                $http({
                    method: 'POST',
                    url: pageUrl + 'user/login',
                    data: user
                })
                    .success(function (data, status, headers, config) {
                        sessionStorage.setItem('accessToken', JSON.stringify(data.access_token));
                        sessionStorage.setItem('tokenType',JSON.stringify(data.token_type));
                        sessionStorage.setItem('username', JSON.stringify(data.username));
                        $location.path('/home');
                        $window.location.reload();
                        notifier.success('Welcome back ' + data.username);
                        success(data);
                    })
                    .error(function (data, status, headers, config) {
                        notifier.error('Incorrect username or password');
                    })
            } else {
                alert('Invalid username or password');
            }
        }

        function register(success, user, registrationForm) {
            if (registrationForm.$valid) {
                $http({
                    method: 'POST',
                    url: pageUrl + 'user/register',
                    data: user
                })
                    .success(function (data, status, headers, config) {
                        notifier.success('Successfully registered ');
                        success(data);
                    })
                    .error(function (data, status, headers, config) {
                        notifier.error('Fill all the required fields with correct data.');
                        console.log(data);
                    })
            } else {
                alert('YNWA')
            }
        };

        function getUserName() {
            return JSON.parse(sessionStorage.getItem('username'));
        }

        return {
            login: login,
            register: register,
            getUserName: getUserName
        }
});