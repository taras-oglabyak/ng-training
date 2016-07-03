(function() {
    'use strict';

    var testDetailEditController = function($routeParams, $location, httpRequest, message) {
        var entityName = 'TestDetail';
        var vm = this;

        httpRequest.findMany('Test').then(function(response) {
            vm.tests = response.data;
        });

        vm.isUpdate = $routeParams.id !== undefined;

        if (vm.isUpdate){
            httpRequest.findOne(entityName, $routeParams.id).then(function(response) {
                vm.testDetail = response.data[0];
            });
        }

        vm.update = function(testDetail) {
            httpRequest.update(entityName, testDetail, testDetail.id). then(function(response) {
                message.success(entityName + ' has been updated!');
                $location.path('/testDetails');
            });
        };

        vm.create = function(testDetail) {
            httpRequest.create(entityName, testDetail).then(function(response) {
                message.success(entityName + ' has been created!');
                $location.path('/testDetails');
            });
        };

    };

    testDetailEditController.$inject = ['$routeParams', '$location', 'httpRequest', 'message'];
    angular.module('app').controller('TestDetailEditController', testDetailEditController);

})();