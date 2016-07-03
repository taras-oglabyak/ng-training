(function() {
    'use strict';

    var subjectController = function(httpRequest, message, globalConstant, utilService) {
        var entityName = 'Subject';
        var vm = this;

        vm.itemsPerPageValue = globalConstant.ITEMS_PER_PAGE;

        httpRequest.count(entityName).then(function(response) {
            vm.count = response.data.numberOfRecords;
        });

        vm.findMany = function(page) {
            httpRequest.findMany(entityName, vm.itemsPerPageValue, vm.itemsPerPageValue * (page - 1)).then(function(response) {
                vm.subjects = response.data;
            });
        };
        vm.findMany(1);

        vm.delete = function(subject) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, subject.subject_id).then(function() {
                    var index = vm.subjects.indexOf(subject);
                    vm.subjects.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function(response) {
                    message.error(utilService.parseErrorResponse(response));
                });
            }
        };

    };

    subjectController.$inject = ['httpRequest', 'message', 'globalConstant', 'utilService'];
    angular.module('app').controller('SubjectController', subjectController);

})();