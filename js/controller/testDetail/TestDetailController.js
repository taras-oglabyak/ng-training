(function() {
    'use strict';

    var testDetailController = function(httpRequest, message, globalConstant, utilService) {
        var entityName = 'TestDetail';
        var vm = this;

        vm.itemsPerPageValue = globalConstant.ITEMS_PER_PAGE;

        httpRequest.findMany('Test').then(function(response) {
            vm.tests = response.data;
        });

        httpRequest.count(entityName).then(function(response) {
            vm.count = response.data.numberOfRecords;
        });

        vm.findMany = function(page) {
            httpRequest.findMany(entityName, vm.itemsPerPageValue, vm.itemsPerPageValue * (page - 1)).then(function(response) {
                vm.testDetails = response.data;
                fillTestDetailsData();
            });
        };
        vm.findMany(1);

        function fillTestDetailsData() {
            for (var i in vm.testDetails) {
                vm.testDetails[i].test_name = getTestNameById(vm.testDetails[i].test_id);
            }
        };

        function getTestNameById(id) {
            for (var i in vm.tests) {
                if (vm.tests[i].test_id == id) {
                    return vm.tests[i].test_name;
                }
            }
            return null;
        };

        vm.delete = function(testDetail) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, testDetail.id).then(function() {
                    var index = vm.testDetails.indexOf(testDetail);
                    vm.testDetails.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function(response) {
                    message.error(utilService.parseErrorResponse(response));
                });
            }
        };

    };

    testDetailController.$inject = ['httpRequest', 'message', 'globalConstant', 'utilService'];
    angular.module('app').controller('TestDetailController', testDetailController);

})();