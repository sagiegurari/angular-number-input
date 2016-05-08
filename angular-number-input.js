/*jslint unparam: true*/

/**
 * @ngdoc method
 * @function
 * @memberof! numberInput
 * @alias numberInput.defineModule
 * @private
 *
 * @description
 * Defines the angular number input directive.
 */
(function defineModule() {
    'use strict';

    var numberInputModule = window.angular.module('number-input', []);

    /**
     * @ngdoc directive
     * @name numberInput
     * @restrict ECA
     *
     * @param {number} min - The min number value
     * @param {number} max - The max number value
     * @param {number} step - The step between numbers
     * @param {function} [validation] - Optional external validation function
     * @param {function} [parser] - Optional external parser function
     * @param {function} [formatter] - Optional external formatter function
     *
     * @description
     * The number-input is an angular directive which provides number validation, parsing and formatting capabilities.
     *
     * @example
     * ```html
     * <input type="text" class="number-input"
     *   ng-model="value"
     *   min="-100"
     *   max="100"
     *   step="0.5"
     *   validation="myNumberValidation"
     *   formatter="myNumberFormatter"
     *   parser="myNumberParser">
     * ```
     */
    numberInputModule.directive('numberInput',
        /**
         * Returns the directive factory.
         *
         * @function
         * @memberof! numberInput
         * @private
         * @returns {object} The directive definition
         */
        function defineDirective() {
            return {
                restrict: 'ECA',
                require: 'ngModel',
                /**
                 * Invoked when the directive is created.<br>
                 * This function will setup the watch logic and ensure the number model value is processed via number validations.
                 *
                 * @function
                 * @memberof! numberInput
                 * @private
                 * @param {object} scope - The angular scope for the element
                 * @param {object} element - The jquery element on which the directive is defined on
                 * @param {object} attrs - Provides access to the element attributes
                 * @param {object} ngModelCtrl - The angular model controller
                 */
                link: function (scope, element, attrs, ngModelCtrl) {
                    var min;
                    var max;
                    var step;
                    var validation;
                    var parser;
                    var formatter;

                    /**
                     * Formats the provided value to a number string value.
                     *
                     * @function
                     * @memberof! numberInput
                     * @private
                     * @param {object} value - The value to format
                     * @returns {string} The formatted value
                     */
                    var formatNumber = function (value) {
                        var number = value;

                        if (formatter) {
                            number = formatter(value);
                        } else if ((value !== undefined) && (value !== null) && (typeof value !== 'string')) {
                            number = String(value);
                        }

                        return number;
                    };

                    /**
                     * Will update the UI with a new view value based on the current model value.
                     *
                     * @function
                     * @memberof! numberInput
                     * @private
                     */
                    var updateViewValue = function () {
                        var viewValue = formatNumber(ngModelCtrl.$modelValue);

                        if (viewValue !== ngModelCtrl.$viewValue) {
                            ngModelCtrl.$setViewValue(viewValue, 'change');
                            ngModelCtrl.$commitViewValue();
                            ngModelCtrl.$render();
                        }
                    };

                    scope.$watch(function getViewValue() {
                        return ngModelCtrl.$viewValue;
                    }, updateViewValue);

                    ngModelCtrl.$parsers.push(function parseNumber(value) {
                        var number;

                        if (parser) {
                            number = parser(value);
                        } else {
                            number = Number(String(value).split(',').join(''));
                        }

                        return number;
                    });

                    ngModelCtrl.$formatters.push(formatNumber);

                    scope.$watch(attrs.ngModel, updateViewValue);

                    /**
                     * Will validate the provided value is a number.
                     *
                     * @function
                     * @memberof! numberInput
                     * @private
                     * @param {number} modelValue - The model value to validate
                     * @returns {boolean} true if valid
                     */
                    ngModelCtrl.$validators.number = function (modelValue) {
                        return !isNaN(modelValue);
                    };

                    /**
                     * Will validate the provided value is not less than the min defined.
                     *
                     * @function
                     * @memberof! numberInput
                     * @private
                     * @param {number} modelValue - The model value to validate
                     * @returns {boolean} true if valid
                     */
                    ngModelCtrl.$validators.min = function (modelValue) {
                        return ((min === undefined) || (modelValue >= min));
                    };

                    /**
                     * Will validate the provided value is not bigger than the max defined.
                     *
                     * @function
                     * @memberof! numberInput
                     * @private
                     * @param {number} modelValue - The model value to validate
                     * @returns {boolean} true if valid
                     */
                    ngModelCtrl.$validators.max = function (modelValue) {
                        return ((max === undefined) || (modelValue <= max));
                    };

                    /**
                     * Will validate the provided value is not between of the defined steps.
                     *
                     * @function
                     * @memberof! numberInput
                     * @private
                     * @param {number} modelValue - The model value to validate
                     * @returns {boolean} true if valid
                     */
                    ngModelCtrl.$validators.step = function (modelValue) {
                        return ((step === undefined) || ((((modelValue * 1000) / (step * 1000)) % 1) === 0));
                    };

                    /**
                     * Will invoke an external validation function if defined.
                     *
                     * @function
                     * @memberof! numberInput
                     * @private
                     * @param {number} modelValue - The model value to validate
                     * @param {string} viewValue - The view value to validate
                     * @returns {boolean} true if valid
                     */
                    ngModelCtrl.$validators.external = function (modelValue, viewValue) {
                        var valid = true;

                        if (validation) {
                            valid = validation(modelValue, viewValue);
                        }

                        return valid;
                    };

                    scope.$watch(attrs.min, function onAttributeChange(value) {
                        if (isNaN(value)) {
                            min = undefined;
                        } else {
                            min = value;
                        }

                        ngModelCtrl.$validate();
                    });

                    scope.$watch(attrs.max, function onAttributeChange(value) {
                        if (isNaN(value)) {
                            max = undefined;
                        } else {
                            max = value;
                        }

                        ngModelCtrl.$validate();
                    });

                    scope.$watch(attrs.step, function onAttributeChange(value) {
                        if (isNaN(value)) {
                            step = undefined;
                        } else {
                            step = value;
                        }

                        ngModelCtrl.$validate();
                    });

                    scope.$watch(attrs.validation, function onAttributeChange(value) {
                        if (value && window.angular.isFunction(value)) {
                            validation = value;
                        } else {
                            validation = null;
                        }

                        ngModelCtrl.$validate();
                    });

                    scope.$watch(attrs.parser, function onAttributeChange(value) {
                        if (value && window.angular.isFunction(value)) {
                            parser = value;
                        } else {
                            parser = null;
                        }

                        ngModelCtrl.$validate();
                    });

                    scope.$watch(attrs.formatter, function onAttributeChange(value) {
                        var updateUI = true;

                        if (value && window.angular.isFunction(value)) {
                            formatter = value;
                        } else if (formatter) {
                            formatter = null;
                        } else {
                            updateUI = false;
                        }

                        if (updateUI) {
                            ngModelCtrl.$validate();
                            updateViewValue();
                        }
                    });
                }
            };
        });
}());
