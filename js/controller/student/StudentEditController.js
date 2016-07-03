(function() {
    'use strict';

    var studentEditController = function($routeParams, $location, httpRequest, message) {
        var entityName = 'Student';
        var vm = this;

        httpRequest.findMany('Group').then(function(response) {
            vm.groups = response.data;
        });

        vm.isUpdate = $routeParams.id != undefined;

        if (vm.isUpdate){
            httpRequest.findOne(entityName, $routeParams.id).then(function(response) {
                vm.student = response.data[0];
            });
        }

        vm.update = function(student) {
            httpRequest.update(entityName, student, student.user_id). then(function(response) {
                message.success(entityName + ' has been updated!');
                $location.path('/students');
            });
        };

        vm.create = function(student) {
            httpRequest.create(entityName, student).then(function(response) {
                message.success(entityName + ' has been created!');
                $location.path('/students');
            });
        };

    };

    studentEditController.$inject = ['$routeParams', '$location', 'httpRequest', 'message'];
    angular.module('app').controller('StudentEditController', studentEditController);

})();