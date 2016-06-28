(function() {
    'use strict';

    var facultyEditController = function($routeParams, httpRequest) {
        var entity = 'Faculty';
        var vm = this;

        httpRequest.findOne(entity, $routeParams.id).then(function(response) {
            vm.faculty = response.data[0];
        });

    };

    facultyEditController.$inject = ['$routeParams', 'httpRequest'];
    angular.module('app').controller('FacultyEditController', facultyEditController);

})();