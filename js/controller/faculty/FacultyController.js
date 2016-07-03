(function() {
    'use strict';

    var facultyController = function(httpRequest, message, globalConstant, utilService) {
        var entityName = 'Faculty';
        var vm = this;

        vm.itemsPerPageValue = globalConstant.ITEMS_PER_PAGE;

        httpRequest.count(entityName).then(function(response) {
            vm.count = response.data.numberOfRecords;
        });

        vm.findMany = function(page) {
            httpRequest.findMany(entityName, vm.itemsPerPageValue, vm.itemsPerPageValue * (page - 1)).then(function(response) {
                vm.faculties = response.data;
            });
        };
        vm.findMany(1);

        vm.delete = function(faculty) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, faculty.faculty_id).then(function() {
                    var index = vm.faculties.indexOf(faculty);
                    vm.faculties.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function(response) {
                    message.error(utilService.parseErrorResponse(response));
                });
            }
        };

    };

    facultyController.$inject = ['httpRequest', 'message', 'globalConstant', 'utilService'];
    angular.module('app').controller('FacultyController', facultyController);

})();