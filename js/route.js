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
            .when('/faculties/edit/:id', {
                  templateUrl: '/view/faculty/entity.html',
                  controller: 'FacultyEditController',
                  controllerAs: 'vm' })
            .when('/faculties/create/', {
                  templateUrl: '/view/faculty/entity.html',
                  controller: 'FacultyEditController',
                  controllerAs: 'vm' })

            .when('/specialities', {
                  templateUrl: '/view/speciality/list.html',
                  controller: 'SpecialityController',
                  controllerAs: 'vm' })
            .when('/specialities/edit/:id', {
                  templateUrl: '/view/speciality/entity.html',
                  controller: 'SpecialityEditController',
                  controllerAs: 'vm' })
            .when('/specialities/create/', {
                  templateUrl: '/view/speciality/entity.html',
                  controller: 'SpecialityEditController',
                  controllerAs: 'vm' })

            .when('/subjects', {
                  templateUrl: '/view/subject/list.html',
                  controller: 'SubjectController',
                  controllerAs: 'vm' })
            .when('/subjects/edit/:id', {
                  templateUrl: '/view/subject/entity.html',
                  controller: 'SubjectEditController',
                  controllerAs: 'vm' })
            .when('/subjects/create/', {
                  templateUrl: '/view/subject/entity.html',
                  controller: 'SubjectEditController',
                  controllerAs: 'vm' })

            .when('/groups', {
                  templateUrl: '/view/group/list.html',
                  controller: 'GroupController',
                  controllerAs: 'vm' })
            .when('/groups/edit/:id', {
                  templateUrl: '/view/group/entity.html',
                  controller: 'GroupEditController',
                  controllerAs: 'vm' })
            .when('/groups/create/', {
                  templateUrl: '/view/group/entity.html',
                  controller: 'GroupEditController',
                  controllerAs: 'vm' })

            .when('/tests', {
                  templateUrl: '/view/test/list.html',
                  controller: 'TestController',
                  controllerAs: 'vm' })
            .when('/tests/edit/:id', {
                  templateUrl: '/view/test/entity.html',
                  controller: 'TestEditController',
                  controllerAs: 'vm' })
            .when('/tests/create/', {
                  templateUrl: '/view/test/entity.html',
                  controller: 'TestEditController',
                  controllerAs: 'vm' })

            .when('/testDetails', {
                  templateUrl: '/view/testDetail/list.html',
                  controller: 'TestDetailController',
                  controllerAs: 'vm' })
            .when('/testDetails/edit/:id', {
                  templateUrl: '/view/testDetail/entity.html',
                  controller: 'TestDetailEditController',
                  controllerAs: 'vm' })
            .when('/testDetails/create/', {
                  templateUrl: '/view/testDetail/entity.html',
                  controller: 'TestDetailEditController',
                  controllerAs: 'vm' })


            .otherwise({redirectTo: '/'});
    });

})();