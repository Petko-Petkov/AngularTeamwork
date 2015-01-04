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

    return {
        getAllAds: getMyAds
    }
});
