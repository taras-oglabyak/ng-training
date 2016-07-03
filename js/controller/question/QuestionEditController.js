(function() {
    'use strict';

    var questionEditController = function($routeParams, $location, httpRequest, message) {
        var entityName = 'Question';
        var vm = this;

        httpRequest.findMany('Test').then(function(response) {
            vm.tests = response.data;
        });

        vm.isUpdate = $routeParams.id != undefined;

        if (vm.isUpdate){
            httpRequest.findOne(entityName, $routeParams.id).then(function(response) {
                vm.question = response.data[0];
            });
        }

        vm.update = function(question) {
            httpRequest.update(entityName, question, question.question_id). then(function(response) {
                message.success(entityName + ' has been updated!');
                $location.path('/questions');
            });
        };

        vm.create = function(question) {
            httpRequest.create(entityName, question).then(function(response) {
                message.success(entityName + ' has been created!');
                $location.path('/questions');
            });
        };

    };

    questionEditController.$inject = ['$routeParams', '$location', 'httpRequest', 'message'];
    angular.module('app').controller('QuestionEditController', questionEditController);

})();