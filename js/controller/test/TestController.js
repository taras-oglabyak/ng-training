(function() {
    'use strict';

    var testController = function(httpRequest, message, globalConstant, utilService) {
        var entityName = 'Test';
        var vm = this;

        vm.itemsPerPageValue = globalConstant.ITEMS_PER_PAGE;

        httpRequest.findMany('Subject').then(function(response) {
            vm.subjects = response.data;
        });

        httpRequest.count(entityName).then(function(response) {
            vm.count = response.data.numberOfRecords;
        });

        vm.findMany = function(page) {
            httpRequest.findMany(entityName, vm.itemsPerPageValue, vm.itemsPerPageValue * (page - 1)).then(function(response) {
                vm.tests = response.data;
                fillTestData();
            });
        };
        vm.findMany(1);

        function fillTestData() {
            for (var i in vm.tests) {
                vm.tests[i].subject_name = getSubjectNameById(vm.tests[i].subject_id);
            }
        }

        function getSubjectNameById(id) {
            for (var i in vm.subjects) {
                if (vm.subjects[i].subject_id == id) {
                    return vm.subjects[i].subject_name;
                }
            }
            return null;
        }

        vm.delete = function(test) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, test.test_id).then(function() {
                    var index = vm.tests.indexOf(test);
                    vm.tests.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function(response) {
                    message.error(utilService.parseErrorResponse(response));
                });
            }
        };

    };

    testController.$inject = ['httpRequest', 'message', 'globalConstant', 'utilService'];
    angular.module('app').controller('TestController', testController);

})();