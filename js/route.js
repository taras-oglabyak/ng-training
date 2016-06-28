(function() {
    'use strict';

    angular.module('app').config(function($routeProvider) {
        $routeProvider

            .when('/', {
                  template: '<h1>dfhsdkfhg</h1>' })

            .when('/faculties', {
                  templateUrl: '/view/faculty/list.html',
                  controller: 'FacultyController',
                  controllerAs: 'vm' })

            .when('/faculties/:id', {
                  templateUrl: '/view/faculty/entity.html',
                  controller: 'FacultyEditController',
                  controllerAs: 'vm' })


            .otherwise({redirectTo: '/'});
    });

})();