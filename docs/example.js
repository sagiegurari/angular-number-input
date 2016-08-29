window.angular.module('exampleApp', ['number-input']).controller('exampleCntrl', [
    '$scope',
    function onCreate($scope) {
        'use strict';

        var index;
        for (index = 1; index <= 3; index++) {
            $scope.$watch('value' + index, function onValueChange(newValue, oldValue) {
                var message = 'Value: ' + newValue + ' Was: ' + oldValue;

                console.log(message);
                $scope['message' + index] = message;
            });

            $scope['value' + index] = 10;
        }

        $scope.dollarParser = function (value) {
            if (value) {
                if (value.charAt(0) === '$') {
                    value = value.substring(1);
                }
            }

            value = Number(value);

            return value;
        };

        $scope.dollarFormatter = function (value) {
            if (value) {
                value = '$' + value;
            }

            return value;
        };
    }
]).service('exampleDollarService', function () {
    'use strict';

    return {
        create: function () {
            return {
                min: -10000,
                max: 10000,
                step: 0.01,
                format: function (value) {
                    if (value) {
                        value = '$' + value;
                    }

                    return value;
                },
                parse: function (value) {
                    if (value) {
                        if (value.charAt(0) === '$') {
                            value = value.substring(1);
                        }
                    }

                    value = Number(value);

                    return value;
                }
            };
        }
    }
});
