(function() {
    'use strict';

    var groupEditController = function($routeParams, $location, httpRequest, message) {
        var entityName = 'Group';
        var vm = this;

        vm.isUpdate = $routeParams.id !== undefined;

        if (vm.isUpdate){
            httpRequest.findOne(entityName, $routeParams.id).then(function(response) {
                vm.group = response.data[0];
            });
        }

        httpRequest.findMany('Faculty').then(function(response) {
                vm.faculties = response.data;
        });
        httpRequest.findMany('Speciality').then(function(response) {
                vm.specialities = response.data;
        });

        vm.update = function(group) {
            httpRequest.update(entityName, group, group.group_id). then(function(response) {
                message.success(entityName + ' has been updated!');
                $location.path('/groups');
            });
        };

        vm.create = function(group) {
            httpRequest.create(entityName, group).then(function(response) {
                message.success(entityName + ' has been created!');
                $location.path('/groups');
            });
        };

    };

    groupEditController.$inject = ['$routeParams', '$location', 'httpRequest', 'message'];
    angular.module('app').controller('GroupEditController', groupEditController);

})();