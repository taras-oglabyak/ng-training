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


            .otherwise({redirectTo: '/'});
    });

})();