(function() {
    'use strict';

    var groupController = function(httpRequest, message, globalConstant, utilService) {
        var entityName = 'Group';
        var vm = this;

        vm.itemsPerPageValue = globalConstant.ITEMS_PER_PAGE;

        httpRequest.findMany('Speciality').then(function(response) {
            vm.specialities = response.data;
        });

        httpRequest.findMany('Faculty').then(function(response) {
            vm.faculties = response.data;
        });

        httpRequest.count(entityName).then(function(response) {
            vm.count = response.data.numberOfRecords;
        });

        vm.findMany = function(page) {
            httpRequest.findMany(entityName, vm.itemsPerPageValue, vm.itemsPerPageValue * (page - 1)).then(function(response) {
                vm.groups = response.data;
                fillGroupsData();
            });
        };
        vm.findMany(1);

        function fillGroupsData() {
            for (var i in vm.groups) {
                vm.groups[i].speciality_name = getSpecialityNameById(vm.groups[i].speciality_id);
                vm.groups[i].faculty_name = getFacultyNameById(vm.groups[i].faculty_id);
            }
        }

        function getSpecialityNameById(id) {
            for (var i in vm.specialities) {
                if (vm.specialities[i].speciality_id == id) {
                    return vm.specialities[i].speciality_name;
                }
            }
            return null;
        }

        function getFacultyNameById(id) {
            for (var i in vm.faculties) {
                if (vm.faculties[i].faculty_id == id) {
                    return vm.faculties[i].faculty_name;
                }
            }
            return null;
        }

        vm.delete = function(group) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, group.group_id).then(function() {
                    var index = vm.groups.indexOf(group);
                    vm.groups.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function(response) {
                    message.error(utilService.parseErrorResponse(response));
                });
            }
        };

    };

    groupController.$inject = ['httpRequest', 'message', 'globalConstant', 'utilService'];
    angular.module('app').controller('GroupController', groupController);

})();