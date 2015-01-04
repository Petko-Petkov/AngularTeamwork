'use strict';

app.controller('PersonalAdsController',
    function personalAdsController($scope, personalAds) {
        personalAds.getAllAds(function (resp) {
            $scope.personalAdsData = resp;
        })
    });