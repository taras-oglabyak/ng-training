(function() {
    'use strict';

    var studentController = function(httpRequest, message, global) {
        var entityName = 'Student';
        var vm = this;

        vm.itemsPerPageValue = global.ITEMS_PER_PAGE;

        httpRequest.findMany('Group').then(function(response) {
            vm.groups = response.data;
        });

        httpRequest.count(entityName).then(function(response) {
            vm.count = response.data.numberOfRecords;
        });

        vm.findMany = function(page) {
            httpRequest.findMany(entityName, vm.itemsPerPageValue, vm.itemsPerPageValue * (page - 1)).then(function(response) {
                vm.students = response.data;
                fillStudentsData();
            });
        };
        vm.findMany(1);

        function fillStudentsData() {
            for (var i in vm.students) {;
                vm.students[i].group_name = getGroupNameById(vm.students[i].group_id);
            }
        };

        function getGroupNameById(id) {
            for (var i in vm.groups) {
                if (vm.groups[i].group_id == id) {
                    return vm.groups[i].group_name;
                }
            }
            return null;
        };

        vm.delete = function(student) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, student.user_id).then(function() {
                    var index = vm.students.indexOf(student);
                    vm.students.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function() {
                    message.error('ERROR!!!');
                });
            }
        };

    };

    studentController.$inject = ['httpRequest', 'message', 'global'];
    angular.module('app').controller('StudentController', studentController);

})();