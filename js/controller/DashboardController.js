(function() {
    'use strict';

    var dashboardController = function($location) {
        var vm = this;


        vm.go = function(url) {
            $location.path(url);
        };

    };


    dashboardController.$inject = ['$location'];
    angular.module('app').controller('DashboardController', dashboardController);

})();