# {"gitdown": "gitinfo", "name": "name"}

[![NPM Version](http://img.shields.io/npm/v/{"gitdown": "gitinfo", "name": "name"}.svg?style=flat)](https://www.npmjs.org/package/{"gitdown": "gitinfo", "name": "name"}) [![CI](https://github.com/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/workflows/CI/badge.svg?branch=master)](https://github.com/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/actions) [![Coverage Status](https://coveralls.io/repos/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/badge.svg)](https://coveralls.io/r/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![Known Vulnerabilities](https://snyk.io/test/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/badge.svg)](https://snyk.io/test/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![Inline docs](http://inch-ci.org/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}.svg?branch=master)](http://inch-ci.org/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![License](https://img.shields.io/npm/l/{"gitdown": "gitinfo", "name": "name"}.svg?style=flat)](https://github.com/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/blob/master/LICENSE)

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
npm install --save {"gitdown": "gitinfo", "name": "name"}
```

Or if you are using bower, you can install it as follows:

```sh
bower install {"gitdown": "gitinfo", "name": "name"} --save
```

{"gitdown": "include", "file": "./README-footer-template.md"}
