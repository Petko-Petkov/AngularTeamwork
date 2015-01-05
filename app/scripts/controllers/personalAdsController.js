'use strict';

app.controller('PersonalAdsController',
    function personalAdsController($scope, $http, personalAds, notifier) {
        personalAds.getAllAds(function (resp) {
            $scope.personalAdsData = resp;
        });

        $scope.adData = {townId: null, categoryId: null};

        $scope.fileSelected = function (fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
        
        $scope.publishNewAd = function (adData) {
            personalAds.postNewAd(adData);
        }
    });