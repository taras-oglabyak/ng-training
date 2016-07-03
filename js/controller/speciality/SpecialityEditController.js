(function() {
    'use strict';

    var specialityEditController = function($routeParams, $location, httpRequest, message) {
        var entityName = 'Speciality';
        var vm = this;

        vm.isUpdate = $routeParams.id !== undefined;

        if (vm.isUpdate){
            httpRequest.findOne(entityName, $routeParams.id).then(function(response) {
                vm.speciality = response.data[0];
            });
        }

        vm.update = function(speciality) {
            httpRequest.update(entityName, speciality, speciality.speciality_id). then(function(response) {
                message.success(entityName + ' has been updated!');
                $location.path('/specialities');
            });
        };

        vm.create = function(speciality) {
            httpRequest.create(entityName, speciality).then(function(response) {
                message.success(speciality + ' has been created!');
                $location.path('/specialities');
            });
        };

    };

    specialityEditController.$inject = ['$routeParams', '$location', 'httpRequest', 'message'];
    angular.module('app').controller('SpecialityEditController', specialityEditController);

})();