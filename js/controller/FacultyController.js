(function() {
    'use strict';

    var facultyController = function(httpRequest, message) {
        var entityName = 'Faculty';
        var vm = this;

        httpRequest.findMany(entityName).then(function(response) {
            vm.faculties = response.data;
        });

        vm.delete = function(faculty) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, faculty.faculty_id).then(function() {
                    var index = vm.faculties.indexOf(faculty);
                    vm.faculties.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function() {
                    message.erorr('ERROR!!!');
                });
            }
        }

    };

    facultyController.$inject = ['httpRequest', 'message'];
    angular.module('app').controller('FacultyController', facultyController);

})();