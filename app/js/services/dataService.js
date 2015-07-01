(function () {
    'use strict';

    angular.module('oldmenTest')
        .factory('Contacts', ['$http', function ($http) {
            return {
                getRegion: function () {
                    return $http.get('data/contacts.json');
                }
            };
        }]);

}());
