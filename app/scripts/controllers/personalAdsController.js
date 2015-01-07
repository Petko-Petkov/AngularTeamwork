'use strict';

app.controller('PersonalAdsController',
    function personalAdsController($scope, $http, personalAds, notifier) {
        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.numPages = 0;
        $scope.adData= {};

        $scope.getMyAds =  personalAds.getAllAds(function (resp) {
            $scope.personalAdsData = resp;

            if(resp.ads.length === 0) {
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
            switch (status){
                case 'Published':
                case 'WaitingApproval': return true;
                default: return false;
            }
        };

        $scope.chechIfAdInactive = function (status) {
            if(status == 'Inactive') {
                return true;
            }
        };

        $scope.reloadAds = function (isFilter, adStatus) {
            if (isFilter) {
                $scope.currentPage = 1;
            }

            personalAds.getAllAds(function (resp) {
                $scope.personalAdsData = resp;

                if(resp.ads.length === 0) {
                    $scope.currentPage = 0;
                }

                $scope.numPages = resp.numPages;
            }, adStatus, $scope.currentPage, $scope.pageSize);
        };
        
        $scope.deactivateAd = function (id) {
            personalAds.deactivateAd(id);
        };

        $scope.deleteAd = function (id) {
            personalAds.deleteAd(id);
        };

        $scope.publishAgain = function (id) {
            personalAds.publishAgain(id)
        };
        
        $scope.publishNewAd = function (adData) {
            personalAds.postNewAd(adData);
        }
    });