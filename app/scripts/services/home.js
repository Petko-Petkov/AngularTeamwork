"use strict";

app.factory('mainData', function ($http, $log, pageUrl) {
    function getAllAdds (success, pageSize, startPage, categoryId, townId) {
        var size = pageSize || 5,
            start = startPage || 1,
            town = townId || -1,
            category = categoryId || -1,
            townStr = '',
            categoryStr = '';

        if(town > 0) {
            townStr = '&townId=' + town;
        }

        if(category > 0) {
            categoryStr = '&categoryId=' + category;
        }

        $http({
            method: 'GET',
            url: pageUrl + 'ads?pageSize=' + size + '&startPage=' + start + townStr + categoryStr
        })
            .success(function (data, status, headers, config) {
                console.log(data.ads);
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            })
    }

    function getAllTowns(success) {
        $http({
            method: 'GET',
            url: pageUrl + 'towns'
        })
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            })
    }

    function getAllCategories(success) {
        $http({
            method: 'GET',
            url: pageUrl + 'categories'
        })
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            })
    }

    return {
        getAllAds: getAllAdds,
        getAllTowns: getAllTowns,
        getAllCategories: getAllCategories
    }
});