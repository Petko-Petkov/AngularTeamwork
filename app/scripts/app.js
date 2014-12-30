/**
 * Created by Pecata on 28.12.2014 г..
 */
'use strict';

var addsSite = angular.module('addsSite', ['ngRoute'])
    .config(function ($routeProvider){
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html'
        });
        $routeProvider.when('/home', {
            templateUrl: 'templates/home.html'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
    });