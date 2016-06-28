(function() {
    'use strict';

    var facultyController = function(httpRequest) {
        var entity = 'Faculty';
        var vm = this;

        httpRequest.findMany(entity).then(function(response) {
            vm.faculties = response.data;
        });

        vm.delete = function(faculty) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entity, faculty.faculty_id).then(function() {
                    var index = vm.faculties.indexOf(faculty);
                    vm.faculties.splice(index, 1); 
                });
            }
        }

    };

    facultyController.$inject = ['httpRequest'];
    angular.module('app').controller('FacultyController', facultyController);

})();