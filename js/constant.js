(function() {
    'use strict';

    angular
        .module('app')
        .constant('globalConstant', {
            'HOST': 'http://ec2-52-38-234-109.us-west-2.compute.amazonaws.com/',
            'GROWL_CONFIG': {ttl: 3000},
            'ITEMS_PER_PAGE': 5});

})();