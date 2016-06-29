(function() {
    'use strict';

    var specialityController = function(httpRequest, message) {
        var entityName = 'Speciality';
        var vm = this;

        httpRequest.findMany(entityName).then(function(response) {
            vm.specialities = response.data;
        });

        vm.delete = function(speciality) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, speciality.speciality_id).then(function() {
                    var index = vm.specialities.indexOf(speciality);
                    vm.specialities.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function() {
                    message.erorr('ERROR!!!');
                });
            }
        }

    };

    specialityController.$inject = ['httpRequest', 'message'];
    angular.module('app').controller('SpecialityController', specialityController);

})();