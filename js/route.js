angular.module('app').config(function($routeProvider){
    $routeProvider
        .when('/1', {
              templateUrl: 'view/1.html',
              controller: 'OneController',
              controllerAs: 'OC'})

        .otherwise({redirectTo: '/'});
});