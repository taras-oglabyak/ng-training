(function() {
    'use strict';

    var specialityController = function(httpRequest, message, global) {
        var entityName = 'Speciality';
        var vm = this;

        vm.itemsPerPageValue = global.ITEMS_PER_PAGE;

        httpRequest.count(entityName).then(function(response) {
            vm.count = response.data.numberOfRecords;
        });

        vm.findMany = function(page) {
            httpRequest.findMany(entityName, vm.itemsPerPageValue, vm.itemsPerPageValue * (page - 1)).then(function(response) {
                vm.specialities = response.data;
            });
        };
        vm.findMany(1);

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
        };

    };

    specialityController.$inject = ['httpRequest', 'message', 'global'];
    angular.module('app').controller('SpecialityController', specialityController);

})();