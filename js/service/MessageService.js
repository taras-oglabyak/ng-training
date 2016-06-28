(function() {
    'use strict';

    var messageService = function(growl, global) {

        this.success = function(message) {
            growl.success(message, global.GROWL_CONFIG);
        };

        this.info = function(message) {
            growl.info(message, global.GROWL_CONFIG);
        };

        this.error = function(message) {
            growl.error(message, global.GROWL_CONFIG);
        };

    };

    messageService.$inject = ['growl', 'global'];
    angular.module('app').service('message', messageService);

})();