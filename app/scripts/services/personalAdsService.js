"use strict";

app.factory('personalAds', function ($http, $log, pageUrl, notifier) {
    function getMyAds(success) {
        $http({
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken'))
            },
            url: pageUrl + 'user/ads'
        })
            .success(function (data, status, headers, config) {
                if (data.ads == 0) {
                    notifier.error('You have noo ads yet!')
                }
                console.log(data.ads);
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            })
    }

    function postNewAd(ad) {
        $http({
            method: 'POST',
            url: pageUrl + 'users/ads',
            headers: {
                Authorization: JSON.parse(sessionStorage.getItem('accessToken'))
            },
            data: ad
        })
            .success(function (data, status, headers, config) {
                notifier.success('Successfully added new ad. After submitted by an administrator it will be published.');
                $location.path('/user/ads');
            })
            .error(function (data, status, headers, config) {
                notifier.error('Something wrong happened');
            })
    };

    return {
        getAllAds: getMyAds,
        postNewAd: postNewAd
    }
});
