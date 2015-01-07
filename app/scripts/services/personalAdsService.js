"use strict";

app.factory('personalAds', function ($http, $log, $location, pageUrl, notifier) {
    function getMyAds(success, adStatus, startPage, pageSize ) {
        var statusStr = '',
            startPageStr = '',
            pageSizeStr = '';

        if(adStatus >= 0) {
            statusStr = 'Status=' + adStatus + '&';
        }

        if(startPage > 0) {
            startPageStr = 'StartPage=' + startPage + '&';
        }

        if(pageSize > 0) {
            pageSizeStr = 'PageSize=' + pageSize;
        }

        $http({
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken'))
            },
            url: pageUrl + 'user/ads?' + statusStr + startPageStr + pageSizeStr
        })
            .success(function (data, status, headers, config) {
                if (data.ads == 0) {
                    notifier.error('You have noo ads yet!')
                }
                console.log(data.ads);
                success(data)
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            })
    }

    function postNewAd(ad) {
        $http({
            method: 'POST',
            url: pageUrl + 'user/ads',
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken'))
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

    function deactivateAd(id) {
        $http({
            method: 'PUT',
            url: pageUrl + 'user/ads/deactivate/' + id,
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken'))
            }
        })
            .success(function (data, status, headers, config) {
                notifier.success('Ad successfully deactivated.')
            })
            .error(function (data, status, headers, config) {
                notifier.error('Could not deactivate your ad');
                $location.path('/myAds')
            })

        }

    function deleteAd(id) {
        $http({
            method: 'DELETE',
            url: pageUrl + 'user/ads/delete/' + id,
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken'))
            }
        })
            .success(function (data, status, headers, config) {
                notifier.success('Ad successfully deleted.');
                $location.path('/myAds')
            })
            .error(function (data, status, headers, config) {
                notifier.error('Ad could not be deleted.')
            })
    }

    function publishAgain(id) {
        $http({
            method: 'PUT',
            url: pageUrl + 'user/ads/PublishAgain/' + id,
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken'))
            }
        })
            .success(function (data, status, headers, config) {
                notifier.success('Ad published again successfully.')
                $location.path('/myAds')
            })
            .error(function (data, status, headers, config) {
                notifier.error('Ad could not be published again');
                $location.path('/myAds')
            })
    }

    return {
        getAllAds: getMyAds,
        postNewAd: postNewAd,
        deactivateAd: deactivateAd,
        deleteAd: deleteAd,
        publishAgain: publishAgain
    }
});
