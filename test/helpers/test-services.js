window.angular.module('testServices', []).service('noAttributes', function () {
    return {
        create: function () {
            return {};
        }
    }
}).service('allAttributes', function () {
    return {
        create: function () {
            var service = {};

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
    }
});
