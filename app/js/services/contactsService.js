'use strict';

angular.module('oldmenTest')
    .factory('Data', ['$http', function ($http) {
        return {
            data: {},
            regions: {},
            get: function () {
                var that = this;
                return $http.get('contacts.json').success(function (data) {
                    that.data = data;
                    that.regions = data.regions;
                });
            },

        };
    }]);
