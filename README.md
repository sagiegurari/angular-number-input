# angular-number-input

[![NPM Version](http://img.shields.io/npm/v/angular-number-input.svg?style=flat)](https://www.npmjs.org/package/angular-number-input) [![CI](https://github.com/sagiegurari/angular-number-input/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/angular-number-input/actions) [![Coverage Status](https://coveralls.io/repos/sagiegurari/angular-number-input/badge.svg)](https://coveralls.io/r/sagiegurari/angular-number-input) [![Known Vulnerabilities](https://snyk.io/test/github/sagiegurari/angular-number-input/badge.svg)](https://snyk.io/test/github/sagiegurari/angular-number-input) [![Inline docs](http://inch-ci.org/github/sagiegurari/angular-number-input.svg?branch=master)](http://inch-ci.org/github/sagiegurari/angular-number-input) [![License](https://img.shields.io/npm/l/angular-number-input.svg?style=flat)](https://github.com/sagiegurari/angular-number-input/blob/master/LICENSE)

> AngularJS number input directive

* [Overview](#overview)
* [Demo](https://sagiegurari.github.io/angular-number-input/)
* [Usage](#usage)
* [Installation](#installation)
* [API Documentation](docs/api.md)
* [Contributing](.github/CONTRIBUTING.md)
* [Release History](#history)
* [License](#license)

<a name="overview"></a>
## Overview
The number-input is an angular directive which provides number validation, parsing and formatting capabilities
on any HTML element.

## Demo
[Live Demo](https://sagiegurari.github.io/angular-number-input/)

<a name="usage"></a>
## Usage
In order to use the number-input directive you first must add the relevant dependencies:

```html
<script type="text/javascript" src="angular.js"></script>
<script type="text/javascript" src="angular-number-input.js"></script>
```

Next you must define it as a dependency in your main angular module as follows:

```js
angular.module('exampleApp', [
    'number-input'
]);
```

Now you can use the directive in your HTML templates, for example:

```html
<input type="text" class="number-input"
  ng-model="value"
  min="-100"
  max="100"
  step="0.5"
  validation="myNumberValidation"
  formatter="myNumberFormatter"
  parser="myNumberParser">
```

In case you have common parsing/formatting/validations/min/max/step you wish to use in many places in your application, you can create a service to implement those and provide it to the directive as follows:

```html
<input type="text" class="number-input"
  ng-model="value"
  service="myMoneyService">
```

And an example service:

```js
angular.module('moneyModule', []).service('myMoneyService', function () {
    return {
        create: function () {
            return {
                config: null, //will be populated by the directive with the config which holds the min/max/step/... values
                min: 10,
                max: 100,
                step: 5,
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
                },
                validate: function (modelValue, viewValue) {
                    return true;
                },
                link: function (scope, element, attrs, ngModelCtrl) {
                    //do some custom stuff on the directive instance like adding DOM event handling
                    element.on('keydown', function ($event) {
                        switch ($event.keyCode) {
                        case $.ui.keyCode.ENTER:
                            element.blur();
                            break;
                        }
                    });
                }
            };
        }
    }
});
```

In case both service and HTML attributes provide a definition for same attributes (for example min, max, parser and so on...), the HTML attribute value will override the service provided value.<br>
If the HTML provided value changes to undefined/null/invalid value, the service value will be used instead.

<a name="installation"></a>
## Installation
Run npm install in your project as follows:

```sh
npm install --save angular-number-input
```

## API Documentation
See full docs at: [API Docs](docs/api.md)

## Contributing
See [contributing guide](.github/CONTRIBUTING.md)

<a name="history"></a>
## Release History

| Date        | Version | Description |
| ----------- | ------- | ----------- |
| 2020-05-11  | v2.0.0  | Migrate to github actions, upgrade minimal node version and remove bower |
| 2019-02-08  | v1.1.7  | Maintenance |
| 2018-02-12  | v1.1.2  | Add support for step validations using big.js for more accurate calculations |
| 2018-02-01  | v1.0.38 | Link function of the provided service will only be called once to prevent memory leaks |
| 2016-07-11  | v0.0.27 | Service can now provide min/max/step values and template values override service values |
| 2016-06-14  | v0.0.22 | Published via NPM (in addition to bower) |
| 2016-05-17  | v0.0.14 | Directive element now listens to new number-input$update-model event |
| 2016-05-15  | v0.0.11 | Redesign of service integration |
| 2016-05-09  | v0.0.5  | 'service' is now string value and not binded to scope |
| 2016-05-09  | v0.0.3  | Adding common service support |
| 2016-05-08  | v0.0.3  | Initial release |

<a name="license"></a>
## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.
