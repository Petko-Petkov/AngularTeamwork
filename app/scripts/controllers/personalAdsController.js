'use strict';

app.controller('PersonalAdsController',
    function personalAdsController($scope, $http, $location, personalAds, notifier) {
        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.numPages = 0;

        $scope.adData = {};

        $scope.getMyAds = personalAds.getAllAds(function (resp) {
            $scope.personalAdsData = resp;

            if (resp.ads.length === 0) {
                $scope.currentPage = 0;
            }

            $scope.numPages = resp.numPages;
        }, status ? status : '', $scope.currentPage, $scope.pageSize);

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

        $scope.checkAdId = function (status) {
            switch (status) {
                case 'Published':
                case 'WaitingApproval':
                    return true;
                default:
                    return false;
            }
        };

        $scope.checkIfAdInactive = function (status) {
            if (status == 'Inactive') {
                return true;
            }
        };

        $scope.reloadAds = function (isFilter, adStatus) {
            if (isFilter) {
                $scope.currentPage = 1;
            }

            personalAds.getAllAds(function (resp) {
                $scope.personalAdsData = resp;

                if (resp.ads.length === 0) {
                    $scope.currentPage = 0;
                }

                $scope.numPages = resp.numPages;
            }, adStatus, $scope.currentPage, $scope.pageSize);
        };

        $scope.deactivateAd = function (id) {
            personalAds.deactivateAd(id)
                .$promise
                .then(function (data) {
                    $location.path('/myAds');
                });
        };

        $scope.getSingleAd = function (id) {
            personalAds.getSingleAd(function (resp) {
                $scope.title = resp.title;
                $scope.text = resp.text;
                $scope.category = resp.categoryId;
                $scope.title = resp.townId;
            }, id);
        };


        $scope.editAd = function (id) {
            personalAds.editAd(id)
        };

        $scope.deleteAd = function (id) {
            personalAds.deleteAd(id);
        };

        $scope.publishAgain = function (id) {
            personalAds.publishAgain(id)
        };

        $scope.publishNewAd = function (adData) {
            personalAds.postNewAd(adData);
        };

        $scope.title = '';
        $scope.text = '';
        $scope.category;
        $scope.town;
    }
);