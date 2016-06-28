(function() {
    'use strict';

    angular
        .module('app')
        .constant('global', {
            'HOST': 'http://ec2-52-38-234-109.us-west-2.compute.amazonaws.com/',
            'GROWL_CONFIG': {ttl: 3000} });

})();