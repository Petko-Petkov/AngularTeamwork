'use strict';

app.controller('PageController',
    function PageController($scope, mainData) {
        mainData.getAllAds(function (resp) {
            $scope.data = resp;
        }, 5, 1);
        mainData.getAllTowns(function (resp) {
            $scope.towns = resp;
        });

        mainData.getAllCategories(function (resp) {
            $scope.categories = resp;
        });

        $scope.myTown;
        if (!$scope.towns) {
            $scope.myTown = 'Select town';
        } else {
            $scope.myTown = $scope.towns[0];
        }

        if (sessionStorage.length) {
            if (sessionStorage.accessToken.length) {
                $scope.showLoginLinks = false;
                $scope.showLoggedInLinks = false;
                $scope.username = JSON.parse(sessionStorage.getItem('username'));
            }
        } else {
            $scope.showLoginLinks = true;
            $scope.showLoggedInLinks = true;
        }

        $scope.author = "Petko Petkov";
        $scope.year = 2014;
    }
);