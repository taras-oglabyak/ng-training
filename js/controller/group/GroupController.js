(function() {
    'use strict';

    var groupController = function(httpRequest, message) {
        var entityName = 'Group';
        var vm = this;

        httpRequest.findMany(entityName).then(function(response) {
            vm.groups = response.data;
        });

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

    groupController.$inject = ['httpRequest', 'message'];
    angular.module('app').controller('GroupController', groupController);

})();