window.angular.module('exampleApp', ['number-input']).controller('exampleCntrl', [
    '$scope',
    function onCreate($scope) {
        'use strict';

        $scope.$watch('value1', function onValueChange(newValue, oldValue) {
            $scope.message1 = 'Value: ' + newValue + ' Was: ' + oldValue;
        });

        $scope.value1 = 10;

        $scope.$watch('value2', function onValueChange(newValue, oldValue) {
            $scope.message2 = 'Value: ' + newValue + ' Was: ' + oldValue;
        });

        $scope.value2 = 10;

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

        $scope.$watch('value2', function onValueChange(newValue, oldValue) {
            $scope.message2 = 'Value: ' + newValue + ' Was: ' + oldValue;
        });

        $scope.value3 = 100;
    }
]).service('exampleDollarService', function () {
    return {
        create: function () {
            return {
                formatter: function (value) {
                    if (value) {
                        value = '$' + value;
                    }

                    return value;
                },
                parser: function (value) {
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
