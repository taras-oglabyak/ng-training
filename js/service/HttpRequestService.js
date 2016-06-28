(function() {
    'use strict';

    var httpRequestService = function($http, $log, global) {

        this.findMany = function(entity, limit, offset) {
            var isPaginated = limit != undefined && offset != undefined;
            var method = isPaginated? '/getRecordsRange/' + limit + '/' + offset : '/getRecords';
            var url = global.HOST + entity + method;
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.findOne = function(entity, id) {
            var url = global.HOST + entity + '/getRecords/' + id;
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.count = function(entity) {
            var url = global.HOST + entity + '/countRecords';
            $log.info('requested: ' + url);

            return $http.get(url);
        };

        this.delete = function(entity, id) {
            var url = global.HOST + entity + '/del/' + id;
            $log.info('requested: ' + url);

            return $http.get(url);
        };


    };

    httpRequestService.$inject = ['$http', '$log', 'global'];
    angular.module('app').service('httpRequest', httpRequestService);

})();