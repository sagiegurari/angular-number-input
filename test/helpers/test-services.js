window.angular.module('testServices', []).service('noAttributes', function define() {
    'use strict';

    return {
        create: function () {
            return {};
        }
    };
}).service('allAttributes', function define() {
    'use strict';

    return {
        create: function () {
            var service = {};

            service.min = 10;
            service.max = 10000;
            service.step = 5;

            service.validate = function () {
                return true;
            };

            service.format = function (value) {
                if (value) {
                    value = '$' + value;
                }

                return value;
            };

            service.parse = function (value) {
                if (value) {
                    if (value.charAt(0) === '$') {
                        value = value.substring(1);
                    }
                }

                value = Number(value);

                return value;
            };

            service.link = function (scope, element, attrs, ngModelCtrl) {
                assert.isObject(service.config);

                assert.isObject(scope);
                assert.isObject(element);
                assert.isObject(attrs);
                assert.isObject(ngModelCtrl);
            };

            return service;
        }
    };
}).service('minValidation', function define() {
    'use strict';

    return {
        create: function () {
            var service = {};

            service.min = 10;

            service.link = function () {
                assert.isObject(service.config);

                assert.equal(service.min, service.config.min);
            };

            return service;
        }
    };
}).service('maxValidation', function define() {
    'use strict';

    return {
        create: function () {
            var service = {};

            service.max = 100;

            service.link = function () {
                assert.isObject(service.config);

                assert.equal(service.max, service.config.max);
            };

            return service;
        }
    };
}).service('stepValidation', function define() {
    'use strict';

    return {
        create: function () {
            var service = {};

            service.step = 5;

            service.link = function () {
                assert.isObject(service.config);

                assert.equal(service.step, service.config.step);
            };

            return service;
        }
    };
});
