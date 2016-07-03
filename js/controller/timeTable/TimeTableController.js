(function() {
    'use strict';

    var timeTableController = function(httpRequest, message, globalConstant, utilService) {
        var entityName = 'TimeTable';
        var vm = this;

        vm.itemsPerPageValue = globalConstant.ITEMS_PER_PAGE;

        httpRequest.findMany('Group').then(function(response) {
            vm.groups = response.data;
        });

        httpRequest.findMany('Subject').then(function(response) {
            vm.subjects = response.data;
        });

        httpRequest.count(entityName).then(function(response) {
            vm.count = response.data.numberOfRecords;
        });

        vm.findMany = function(page) {
            httpRequest.findMany(entityName, vm.itemsPerPageValue, vm.itemsPerPageValue * (page - 1)).then(function(response) {
                vm.timeTables = response.data;
                fillTimeTableData();
            });
        };
        vm.findMany(1);

        function fillTimeTableData() {
            for (var i in vm.timeTables) {
                vm.timeTables[i].subject_name = getSubjectNameById(vm.timeTables[i].subject_id);
                vm.timeTables[i].group_name = getGroupNameById(vm.timeTables[i].group_id);
            }
        };

        function getSubjectNameById(id) {
            for (var i in vm.subjects) {
                if (vm.subjects[i].subject_id == id) {
                    return vm.subjects[i].subject_name;
                }
            }
            return null;
        };

        function getGroupNameById(id) {
            for (var i in vm.groups) {
                if (vm.groups[i].group_id == id) {
                    return vm.groups[i].group_name;
                }
            }
            return null;
        };

        vm.delete = function(timeTable) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, timeTable.timetable_id).then(function() {
                    var index = vm.timeTables.indexOf(timeTable);
                    vm.timeTables.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function(response) {
                    message.error(utilService.parseErrorResponse(response));
                });
            }
        };

    };

    timeTableController.$inject = ['httpRequest', 'message', 'globalConstant', 'utilService'];
    angular.module('app').controller('TimeTableController', timeTableController);

})();