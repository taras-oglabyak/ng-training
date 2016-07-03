(function() {
    'use strict';

    var testEditController = function($routeParams, $location, httpRequest, message) {
        var entityName = 'Test';
        var vm = this;

        httpRequest.findMany('Subject').then(function(response) {
            vm.subjects = response.data;
        });

        vm.isUpdate = $routeParams.id != undefined;

        if (vm.isUpdate){
            httpRequest.findOne(entityName, $routeParams.id).then(function(response) {
                vm.test = response.data[0];
            });
        }

        vm.update = function(test) {
            httpRequest.update(entityName, test, test.test_id). then(function(response) {
                message.success(entityName + ' has been updated!');
                $location.path('/tests');
            });
        };

        vm.create = function(test) {
            httpRequest.create(entityName, test).then(function(response) {
                message.success(entityName + ' has been created!');
                $location.path('/tests');
            });
        };

    };

    testEditController.$inject = ['$routeParams', '$location', 'httpRequest', 'message'];
    angular.module('app').controller('TestEditController', testEditController);

})();