(function() {
    'use strict';

    var httpRequestService = function($http, $log, globalConstant) {

        this.findMany = function(entityName, limit, offset) {
            var isPaginated = limit !== undefined && offset !== undefined;
            var method = isPaginated? '/getRecordsRange/' + limit + '/' + offset : '/getRecords';
            var url = globalConstant.HOST + entityName + method;
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.findOne = function(entityName, id) {
            var url = globalConstant.HOST + entityName + '/getRecords/' + id;
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.count = function(entityName) {
            var url = globalConstant.HOST + entityName + '/countRecords';
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.delete = function(entityName, id) {
            var url = globalConstant.HOST + entityName + '/del/' + id;
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.update = function(entityName, entity, id) {
            var url = globalConstant.HOST + entityName + '/update/' + id;
            $log.info('requested: ' + url);

            return $http.post(url, entity);
        };

        this.create = function(entityName, entity) {
            var url = globalConstant.HOST + entityName + '/insertData';
            $log.info('requested: ' + url);

            return $http.post(url, entity);
        };


    };

    httpRequestService.$inject = ['$http', '$log', 'globalConstant'];
    angular.module('app').service('httpRequest', httpRequestService);

})();