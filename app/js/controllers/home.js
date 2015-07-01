(function () {
    'use strict';

    angular.module('oldmenTest')
        .controller('HomeCtrl', function ($scope, Contacts) {
            var allData;
            $scope.hasCountry = true;

            function initData(data, initialRegion) {
                allData = data;
                $scope.regions = data.regions;
                $scope.selectedRegion = $scope.regions[$scope.regions.indexOf(initialRegion)];
                $scope.countries = data.countries;
            }

            function initContries(region) {
                $scope.selectedCountries = $scope.countries[region];
                $scope.selectedCountry = $scope.countries[region][0];
                $scope.hasCountry = true;
            }

            function getContacts (country) {
                $scope.contacts = allData.contacts[country];
            }

            Contacts.getRegion().success(function (data) {
                initData(data, 'Europe');
                $scope.getCountries($scope.selectedRegion);
                $scope.selectedCountry = $scope.countries[$scope.selectedRegion][9];
            });

            $scope.getCountries = function (region) {

                if($scope.countries[region] !== undefined && $scope.countries.length !== 0){
                    initContries(region);
                    getContacts($scope.selectedCountry);

                } else{
                    $scope.hasCountry = false;
                    $scope.contacts = allData.contacts[$scope.selectedRegion];
                    $scope.contactsShown = true;
                }
            };

            $scope.showContacts = function (country) {
                $scope.contactsShown = true;
                getContacts(country);
            };

            $scope.closeModal = function () {
                $scope.contactsShown = false;
            };

        });

}());
