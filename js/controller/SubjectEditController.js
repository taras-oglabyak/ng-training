(function() {
    'use strict';

    var subjectEditController = function($routeParams, $location, httpRequest, message) {
        var entityName = 'Subject';
        var vm = this;

        vm.isUpdate = $routeParams.id != undefined;

        if (vm.isUpdate){
            httpRequest.findOne(entityName, $routeParams.id).then(function(response) {
                vm.subject = response.data[0];
            });
        }

        vm.update = function(subject) {
            httpRequest.update(entityName, subject, subject.subject_id). then(function(response) {
                message.success(entityName + ' has been updated!');
                $location.path('/subjects');
            });
        };

        vm.create = function(subject) {
            httpRequest.create(entityName, subject).then(function(response) {
                message.success(entityName + ' has been created!');
                $location.path('/subjects');
            });
        };

};

    subjectEditController.$inject = ['$routeParams', '$location', 'httpRequest', 'message'];
    angular.module('app').controller('SubjectEditController', subjectEditController);

})();