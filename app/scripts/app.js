'use strict';

var app = angular.module('addsSite', ['ngRoute'])
    .value('toastr', toastr)
    .constant('pageUrl', 'http://softuni-ads.azurewebsites.net/api/')
    .config(function ($routeProvider){
        $routeProvider.when('/register', {
            templateUrl: 'templates/account/register.html'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/account/login.html'
        });
        $routeProvider.when('/home', {
            templateUrl: 'templates/home.html'
        });
        $routeProvider.when('/myAds', {
            templateUrl: 'templates/personalAds/myAds.html'
        });
        $routeProvider.when('/publishAd', {
            templateUrl: 'templates/personalAds/publishAd.html'
        });
        $routeProvider.when('/editAd', {
            templateUrl: 'templates/personalAds/editAd.html'
        });
        $routeProvider.when('/editProfile', {
            templateUrl: 'templates/account/editProfile.html'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
    });