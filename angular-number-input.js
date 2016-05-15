/*jslint unparam: true*/

/**
 * Service definition used by the number input to extend the number input capabilities.
 *
 * @author Sagie Gur-Ari
 * @interface NumberInputService
 * @public
 */

/**
 * Returns an instance of the service used by a specific directive instance.
 *
 * @function
 * @memberof! NumberInputService
 * @name NumberInputService#create
 * @public
 */

/**
 * The directive configuration.
 *
 * @typedef {object} Config
 * @param {number} [config.min] - Optional min number value
 * @param {number} [config.max] - Optional max number value
 * @param {number} [config.step] - Optional step between numbers
 */

/**
 * Holds the current configuration of the service and is populated by the directive instance.
 *
 * @memberof! NumberInputService
 * @name NumberInputService#config
 * @type {Config}
 * @public
 */

/**
 * Optional validation function.<br>
 * This function is optional and it is not required to implement it.
 *
 * @function
 * @memberof! NumberInputService
 * @type {function}
 * @public
 */

/**
 * Optional parser function.<br>
 * This function is optional and it is not required to implement it.
 *
 * @function
 * @memberof! NumberInputService
 * @name NumberInputService#parser
 * @type {function}
 * @public
 */

/**
 * Optional formatter function.<br>
 * This function is optional and it is not required to implement it.
 *
 * @function
 * @memberof! NumberInputService
 * @name NumberInputService#formatter
 * @type {function}
 * @public
 */

/**
 * Will be called only once when the directive has access to the service.<br>
 * This function is optional and it is not required to implement it.
 *
 * @function
 * @memberof! NumberInputService
 * @name NumberInputService#link
 * @public
 * @param {object} scope - The angular scope for the element
 * @param {object} element - The jquery element on which the directive is defined on
 * @param {object} attributes - Provides access to the element attributes
 * @param {object} ngModelCtrl - The angular model controller
 */

/**
 * @ngdoc method
 * @function
 * @memberof! numberInput
 * @alias numberInput.defineModule
 * @author Sagie Gur-Ari
 * @private
 *
 * @description
 * Defines the angular number input directive.
 */
(function defineModule() {
    'use strict';

    /**
     * Returns the directive factory.
     *
     * @function
     * @memberof! numberInput
     * @private
     * @param {object} $injector - The angular injector service
     * @returns {object} The directive definition
     */
    var defineDirective = function ($injector) {
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
                var service;

                /**
                 * Sets the config for the service in case of any config change.
                 *
                 * @function
                 * @memberof! numberInput
                 * @private
                 */
                var setConfig = function () {
                    if (service) {
                        service.config = {
                            min: min,
                            max: max,
                            step: step
                        };
                    }
                };

                /**
                 * Creates and initializes the requested service.
                 *
                 * @function
                 * @memberof! numberInput
                 * @private
                 * @param {string} serviceName - The service name to inject
                 */
                var initService = function (serviceName) {
                    //clear all functions as service overrides them
                    validation = null;
                    parser = null;
                    formatter = null;

                    if (serviceName) {
                        var factory = $injector.get(serviceName);

                        service = factory.create();

                        setConfig();

                        if (service.link) {
                            service.link(scope, element, attrs, ngModelCtrl);
                        }

                        if (service.validator) {
                            validation = service.validator;
                        }

                        if (service.parser) {
                            parser = service.parser;
                        }

                        if (service.formatter) {
                            formatter = service.formatter;
                        }
                    }
                };

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

                    setConfig();

                    ngModelCtrl.$validate();
                });

                scope.$watch(attrs.max, function onAttributeChange(value) {
                    if (isNaN(value)) {
                        max = undefined;
                    } else {
                        max = value;
                    }

                    setConfig();

                    ngModelCtrl.$validate();
                });

                scope.$watch(attrs.step, function onAttributeChange(value) {
                    if (isNaN(value)) {
                        step = undefined;
                    } else {
                        step = value;
                    }

                    setConfig();

                    ngModelCtrl.$validate();
                });

                scope.$watch(attrs.validation, function onAttributeChange(value) {
                    if (!service) {
                        if (value && window.angular.isFunction(value)) {
                            validation = value;
                        } else {
                            validation = null;
                        }

                        ngModelCtrl.$validate();
                    }
                });

                scope.$watch(attrs.parser, function onAttributeChange(value) {
                    if (!service) {
                        if (value && window.angular.isFunction(value)) {
                            parser = value;
                        } else {
                            parser = null;
                        }

                        ngModelCtrl.$validate();
                    }
                });

                scope.$watch(attrs.formatter, function onAttributeChange(value) {
                    if (!service) {
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
                    }
                });

                scope.$watch(function getServiceNameViaAttribute() {
                    return element.attr('service');
                }, function onAttributeChange(value) {
                    var updateUI = true;

                    if (value) {
                        initService(value);
                    } else if (service) {
                        service = null;
                        initService();
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
    };

    var numberInputModule = window.angular.module('number-input', []);

    /**
     * @ngdoc directive
     * @name numberInput
     * @restrict ECA
     *
     * @param {number} ng-model - The model for the number input
     * @param {number} [min] - Optional min number value
     * @param {number} [max] - Optional max number value
     * @param {number} [step] - Optional step between numbers
     * @param {function} [validation] - Optional external validation function
     * @param {function} [parser] - Optional external parser function
     * @param {function} [formatter] - Optional external formatter function
     * @param {string} [service] - Optional service to inject which will be used to control the directive behaviour (will override validation, parser and formatter attributes)
     * @returns {object} The directive definition
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
    numberInputModule.directive('numberInput', ['$injector', defineDirective]);
}());
