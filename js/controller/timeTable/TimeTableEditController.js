(function() {
    'use strict';

    var timeTableEditController = function($routeParams, $location, httpRequest, message) {
        var entityName = 'TimeTable';
        var vm = this;

        httpRequest.findMany('Group').then(function(response) {
            vm.groups = response.data;
        });

        httpRequest.findMany('Subject').then(function(response) {
            vm.subjects = response.data;
        });

        vm.isUpdate = $routeParams.id !== undefined;

        if (vm.isUpdate){
            httpRequest.findOne(entityName, $routeParams.id).then(function(response) {
                vm.timeTable = response.data[0];
            });
        }

        vm.update = function(timeTable) {
            httpRequest.update(entityName, timeTable, timeTable.timetable_id). then(function(response) {
                message.success(entityName + ' has been updated!');
                $location.path('/timeTables');
            });
        };

        vm.create = function(timeTable) {
            httpRequest.create(entityName, timeTable).then(function(response) {
                message.success(entityName + ' has been created!');
                $location.path('/timeTables');
            });
        };

    };

    timeTableEditController.$inject = ['$routeParams', '$location', 'httpRequest', 'message'];
    angular.module('app').controller('TimeTableEditController', timeTableEditController);

})();