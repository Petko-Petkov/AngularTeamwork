/*
"use strict";

app.factory('accountData', function ($http, $log, pageUrl, user, notifier) {
    function login(success) {
        $http({
            method: 'POST',
            url: pageUrl + 'user/Register',
            data: user
        })
            .success(function (data, status, headers, config) {
                notifier.success('Welcome back ');
                success(data);
            })
            .error(function (data, status, headers, config) {
                notifier.error('Incorrect username or password');
                $log.warn(data);
            })
    }

    function register(success) {
        $http({
            method: 'POST',
            url: pageUrl + 'user/login',
            data: user
        })
            .success(function (data, status, headers, config) {
                notifier.success('Successfully registered ');
                success(data);
            })
            .error(function (data, status, headers, config) {
                notifier.error('Fill all the required fields with correct data.');
                $log.warn(data);
            })
    }

    return {
        login: login,
        register: register
    }
});*/
