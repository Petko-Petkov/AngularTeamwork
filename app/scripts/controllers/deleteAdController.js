'use strict';

app.controller('DeleteAdController',
    function deleteAdController($scope, $routeParams, personalAds) {
        $scope.param = $routeParams.param;

        personalAds.getSingleAd(function (resp) {
            $scope.data = resp;
        }, $scope.param);

        $scope.deleteAd = function (id) {
            personalAds.deleteAd(id);
        }
});