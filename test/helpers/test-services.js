window.angular.module('testServices', []).service('noAttributes', function () {
    return {
        create: function () {
            return {
                setConfig: function (config) {
                    assert.isDefined(config);
                }
            };
        }
    }
}).service('allAttributes', function () {
    return {
        create: function () {
            var service = {};
            var config;
            service.setConfig = function (config) {
                assert.isDefined(config);
            };

            service.getValidator = function () {
                return function () {
                    return true;
                }
            };

            service.getFormatter = function () {
                return function (value) {
                    if (value) {
                        value = '$' + value;
                    }

                    return value;
                };
            };

            service.getParser = function () {
                return function (value) {
                    if (value) {
                        if (value.charAt(0) === '$') {
                            value = value.substring(1);
                        }
                    }

                    value = Number(value);

                    return value;
                };
            };

            service.link = function (scope, element, attrs, ngModelCtrl) {
                assert.isObject(scope);
                assert.isObject(element);
                assert.isObject(attrs);
                assert.isObject(ngModelCtrl);
            };

            return service;
        }
    }
});
