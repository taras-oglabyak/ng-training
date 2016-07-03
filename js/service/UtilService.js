(function() {
    'use strict';

    var utilService = function() {

        this.parseErrorResponse = function(response) {
            return 'Code: ' + response.status + '. Message: ' + response.data.response;
        };

    };

    angular.module('app').service('utilService', utilService);

})();