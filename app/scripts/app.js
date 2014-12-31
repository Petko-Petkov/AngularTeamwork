/**
 * Created by Pecata on 28.12.2014 г..
 */
'use strict';

var app = angular.module('addsSite', ['ngRoute'])
    .value('toastr', toastr)
    .constant('pageUrl', 'http://softuni-ads.azurewebsites.net/api/')
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