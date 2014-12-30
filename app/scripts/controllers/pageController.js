/**
 * Created by Pecata on 28.12.2014 г..
 */

'use strict';

addsSite.controller('PageController',
    function PageController($scope, mainData) {
        mainData.getAllAds(function (resp) {
            $scope.data = resp;
        });
        mainData.getAllTowns(function (resp) {
            $scope.towns = resp;
        });

        mainData.getAllCategories(function(resp) {
            $scope.categories = resp;
        })

        $scope.author = "Petko Petkov";
        $scope.year = 2014;
    }
);