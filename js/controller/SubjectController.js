(function() {
    'use strict';

    var subjectController = function(httpRequest, message) {
        var entityName = 'Subject';
        var vm = this;

        httpRequest.findMany(entityName).then(function(response) {
            vm.subjects = response.data;
        });

        vm.delete = function(subject) {
            if (confirm('Delete dialog')) {
                httpRequest.delete(entityName, subject.subject_id).then(function() {
                    var index = vm.subjects.indexOf(subject);
                    vm.subjects.splice(index, 1);
                    message.success(entityName + ' has been removed');
                }, function() {
                    message.erorr('ERROR!!!');
                });
            }
        }

    };

    subjectController.$inject = ['httpRequest', 'message'];
    angular.module('app').controller('SubjectController', subjectController);

})();