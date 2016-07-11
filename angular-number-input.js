/*jslint unparam: true*/

/**
 * Event which will update the model and view value.
 *
 * @event number-input$update-model
 * @param {object} [modelValue] - The new model value (undefined to use the ngModelCtrl.$modelValue instead)
 */

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
 * @returns {object} The service instance
 */

/**
 * The directive configuration.
 *
 * @typedef {object} Config
 * @param {number} [min] - Optional min number value
 * @param {number} [max] - Optional max number value
 * @param {number} [step] - Optional step between numbers
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
 * Optional min value.
 *
 * @memberof! NumberInputService
 * @name NumberInputService#min
 * @type {number}
 * @public
 */

/**
 * Optional max value.
 *
 * @memberof! NumberInputService
 * @name NumberInputService#max
 * @type {number}
 * @public
 */

/**
 * Optional step value.
 *
 * @memberof! NumberInputService
 * @name NumberInputService#step
 * @type {number}
 * @public
 */

/**
 * Optional validation function.<br>
 * This function is optional and it is not required to implement it.
 *
 * @function
 * @memberof! NumberInputService
 * @name NumberInputService#validate
 * @public
 * @param {object} [modelValue] - The model value
 * @param {object} [viewValue] - The UI view value
 * @returns {boolean} true if valid
 */

/**
 * Optional parser function.<br>
 * This function is optional and it is not required to implement it.
 *
 * @function
 * @memberof! NumberInputService
 * @name NumberInputService#parse
 * @public
 * @param {object} [value] - The value to parse
 * @returns {object} The parsed value
 */

/**
 * Optional formatter function.<br>
 * This function is optional and it is not required to implement it.
 *
 * @function
 * @memberof! NumberInputService
 * @name NumberInputService#format
 * @public
 * @param {object} [value] - The value to format
 * @returns {object} The formatted value
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
                var serviceState = {};

                /**
                 * Sets the config for the service in case of any config change.
                 *
                 * @function
                 * @memberof! numberInput
                 * @private
                 */
                var setConfig = function () {
                    service.config = {
                        min: min,
                        max: max,
                        step: step
                    };
                };

                /**
                 * Initializes the state based on the current service capabilities.
                 *
                 * @function
                 * @memberof! numberInput
                 * @private
                 */
                var initStateFromService = function () {
                    if (service) {
                        if ((min === undefined) && (!isNaN(service.min))) {
                            min = service.min;
                            serviceState.min = true;
                        } else {
                            delete serviceState.min;
                        }

                        if ((max === undefined) && (!isNaN(service.max))) {
                            max = service.max;
                            serviceState.max = true;
                        } else {
                            delete serviceState.max;
                        }

                        if ((step === undefined) && (!isNaN(service.step))) {
                            step = service.step;
                            serviceState.step = true;
                        } else {
                            delete serviceState.step;
                        }

                        setConfig();

                        if (service.link) {
                            service.link(scope, element, attrs, ngModelCtrl);
                        }

                        if ((!validation) && service.validate) {
                            validation = service.validate.bind(service);
                            serviceState.validation = true;
                        } else {
                            delete serviceState.validation;
                        }

                        if ((!parser) && service.parse) {
                            parser = service.parse.bind(service);
                            serviceState.parser = true;
                        } else {
                            delete serviceState.parser;
                        }

                        if ((!formatter) && service.format) {
                            formatter = service.format.bind(service);
                            serviceState.formatter = true;
                        } else {
                            delete serviceState.formatter;
                        }
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
                    if (serviceName) {
                        var factory = $injector.get(serviceName);

                        service = factory.create();

                        initStateFromService();
                    } else {
                        if (serviceState.min) {
                            min = undefined;
                        }

                        if (serviceState.max) {
                            max = undefined;
                        }

                        if (serviceState.step) {
                            step = undefined;
                        }

                        if (serviceState.validation) {
                            validation = null;
                        }

                        if (serviceState.parser) {
                            parser = null;
                        }

                        if (serviceState.formatter) {
                            formatter = null;
                        }

                        serviceState = {};
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
                 * @param {object} [modelValue] - The new model value (undefined to use the ngModelCtrl.$modelValue instead)
                 */
                var updateViewValue = function (modelValue) {
                    if (modelValue === undefined) {
                        modelValue = ngModelCtrl.$modelValue;
                    }

                    var viewValue = formatNumber(modelValue);

                    if (viewValue !== ngModelCtrl.$viewValue) {
                        ngModelCtrl.$setViewValue(viewValue, 'change');
                        ngModelCtrl.$commitViewValue();
                        ngModelCtrl.$render();
                    }
                };

                element.on('number-input$update-model', function onUpdateModelEvent($event, modelValue) {
                    updateViewValue(modelValue);
                });

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

                    initStateFromService();

                    ngModelCtrl.$validate();
                });

                scope.$watch(attrs.max, function onAttributeChange(value) {
                    if (isNaN(value)) {
                        max = undefined;
                    } else {
                        max = value;
                    }

                    initStateFromService();

                    ngModelCtrl.$validate();
                });

                scope.$watch(attrs.step, function onAttributeChange(value) {
                    if (isNaN(value)) {
                        step = undefined;
                    } else {
                        step = value;
                    }

                    initStateFromService();

                    ngModelCtrl.$validate();
                });

                scope.$watch(attrs.validation, function onAttributeChange(value) {
                    if (value && window.angular.isFunction(value)) {
                        validation = value;
                    } else {
                        validation = null;
                    }

                    initStateFromService();

                    ngModelCtrl.$validate();
                });

                scope.$watch(attrs.parser, function onAttributeChange(value) {
                    if (value && window.angular.isFunction(value)) {
                        parser = value;
                    } else {
                        parser = null;
                    }

                    initStateFromService();

                    ngModelCtrl.$validate();
                });

                scope.$watch(attrs.formatter, function onAttributeChange(value) {
                    if (value && window.angular.isFunction(value)) {
                        formatter = value;
                    } else if (formatter) {
                        formatter = null;
                    }

                    initStateFromService();

                    ngModelCtrl.$validate();
                    updateViewValue();
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
     * @listens number-input$update-model
     *
     * @description
     * The number-input is an angular directive which provides number validation, parsing and formatting capabilities.
     *
     * @example
     * ```html
     * <!-- simple usage of the directive with custom validation/formatting/parsing -->
     * <input type="text" class="number-input"
     *   ng-model="value"
     *   min="-100"
     *   max="100"
     *   step="0.5"
     *   validation="myNumberValidation"
     *   formatter="myNumberFormatter"
     *   parser="myNumberParser">
     *
     * <!-- using angular service for common custom validation/formatting/parsing -->
     * <input type="text" class="number-input"
     *   ng-model="value"
     *   service="myService">
     * ```
     */
    numberInputModule.directive('numberInput', ['$injector', defineDirective]);
}());
