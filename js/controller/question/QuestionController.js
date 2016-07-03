(function() {
    'use strict';

    var questionController = function(httpRequest, message, globalConstant, utilService) {
        var entityName = 'Question';
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
                vm.questions = response.data;
                fillQuestionsData();
            });
        };
        vm.findMany(1);

        function fillQuestionsData() {
            for (var i in vm.questions) {
                vm.questions[i].test_name = getTestNameById(vm.questions[i].test_id);
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

        vm.delete = function(question) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, question.question_id).then(function() {
                    var index = vm.questions.indexOf(question);
                    vm.questions.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function(response) {
                    message.error(utilService.parseErrorResponse(response));
                });
            }
        };

    };

    questionController.$inject = ['httpRequest', 'message', 'globalConstant', 'utilService'];
    angular.module('app').controller('QuestionController', questionController);

})();