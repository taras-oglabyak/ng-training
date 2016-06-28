(function() {
    'use strict';

    var httpRequestService = function($http, $log, global) {

        this.findMany = function(entityName, limit, offset) {
            var isPaginated = limit != undefined && offset != undefined;
            var method = isPaginated? '/getRecordsRange/' + limit + '/' + offset : '/getRecords';
            var url = global.HOST + entityName + method;
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.findOne = function(entityName, id) {
            var url = global.HOST + entityName + '/getRecords/' + id;
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.count = function(entityName) {
            var url = global.HOST + entityName + '/countRecords';
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.delete = function(entityName, id) {
            var url = global.HOST + entityName + '/del/' + id;
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.update = function(entityName, entity, id) {
            var url = global.HOST + entityName + '/update/' + id;
            $log.info('requested: ' + url);

            return $http.post(url, entity);
        };

        this.create = function(entityName, entity) {
            var url = global.HOST + entityName + '/insertData';
            $log.info('requested: ' + url);

            return $http.post(url, entity);
        };


    };

    httpRequestService.$inject = ['$http', '$log', 'global'];
    angular.module('app').service('httpRequest', httpRequestService);

})();