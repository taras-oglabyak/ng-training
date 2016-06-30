(function() {
    'use strict';

    var groupController = function(httpRequest, message, global) {
        var entityName = 'Group';
        var vm = this;

        vm.itemsPerPageValue = global.ITEMS_PER_PAGE;

        httpRequest.count(entityName).then(function(response) {
            vm.count = response.data.numberOfRecords;
        });

        vm.findMany = function(page) {
            httpRequest.findMany(entityName, vm.itemsPerPageValue, vm.itemsPerPageValue * (page - 1)).then(function(response) {
                vm.groups = response.data;
            });
        };
        vm.findMany(1);

        vm.delete = function(group) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, group.group_id).then(function() {
                    var index = vm.groups.indexOf(group);
                    vm.groups.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function() {
                    message.erorr('ERROR!!!');
                });
            }
        };

    };

    groupController.$inject = ['httpRequest', 'message', 'global'];
    angular.module('app').controller('GroupController', groupController);

})();