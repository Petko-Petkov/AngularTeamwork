'use strict';

app.controller('EditAdController',
    function editAdController($scope, $routeParams, personalAds, mainData) {
        $scope.param = $routeParams.param;
        $scope.editedAd = {};

        personalAds.getSingleAd(function (resp) {
            $scope.data = resp;
        }, $scope.param);

        mainData.getAllCategories(function (resp) {
            $scope.categories = resp;
        });

        mainData.getAllTowns(function (resp) {
            $scope.towns = resp;
        });

        $scope.edit = function (id, adData) {
            personalAds.editAd(id);
        }

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
});