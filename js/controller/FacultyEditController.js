(function() {
    'use strict';

    var facultyEditController = function($routeParams, $location, httpRequest, message) {
        var entityName = 'Faculty';
        var vm = this;

        vm.isUpdate = $routeParams.id != undefined;

        if (vm.isUpdate){
            httpRequest.findOne(entityName, $routeParams.id).then(function(response) {
                vm.faculty = response.data[0];
            });
        }

        vm.update = function(faculty) {
            httpRequest.update(entityName, faculty, faculty.faculty_id). then(function(response) {
                message.success(entityName + ' has been updated!');
                $location.path('/faculties');
            });
        };

        vm.create = function(faculty) {
            httpRequest.create(entityName, faculty).then(function(response) {
                message.success(entityName + ' has been created!');
                $location.path('/faculties');
            });
        };

};

    facultyEditController.$inject = ['$routeParams', '$location', 'httpRequest', 'message'];
    angular.module('app').controller('FacultyEditController', facultyEditController);

})();