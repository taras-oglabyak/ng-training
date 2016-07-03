(function() {
    'use strict';

    var messageService = function(growl, globalConstant) {

        this.success = function(message) {
            growl.success(message, globalConstant.GROWL_CONFIG);
        };

        this.info = function(message) {
            growl.info(message, globalConstant.GROWL_CONFIG);
        };

        this.error = function(message) {
            growl.error(message, globalConstant.GROWL_CONFIG);
        };

    };

    messageService.$inject = ['growl', 'globalConstant'];
    angular.module('app').service('message', messageService);

})();