/**
 * Created by Pecata on 30.12.2014 г..
 */
"use strict";

addsSite.factory('mainData', function ($http, $log) {
    function getAllAdds (success) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/ads?pageSize=5&startPage=1'
        })
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            })
    }

    function getAllTowns(success) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/towns'
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
            url: 'http://softuni-ads.azurewebsites.net/api/categories'
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