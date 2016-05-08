# AngularJS number-input

[![Bower Version](https://img.shields.io/bower/v/angular-number-input.svg?style=flat)](https://github.com/sagiegurari/angular-number-input/releases) [![Build Status](https://travis-ci.org/sagiegurari/angular-number-input.svg)](http://travis-ci.org/sagiegurari/angular-number-input) [![Coverage Status](https://coveralls.io/repos/sagiegurari/angular-number-input/badge.svg)](https://coveralls.io/r/sagiegurari/angular-number-input) [![Code Climate](https://codeclimate.com/github/sagiegurari/angular-number-input/badges/gpa.svg)](https://codeclimate.com/github/sagiegurari/angular-number-input) [![bitHound Code](https://www.bithound.io/github/sagiegurari/angular-number-input/badges/code.svg)](https://www.bithound.io/github/sagiegurari/angular-number-input) [![Inline docs](http://inch-ci.org/github/sagiegurari/angular-number-input.svg?branch=master)](http://inch-ci.org/github/sagiegurari/angular-number-input)<br>
[![License](https://img.shields.io/bower/l/angular-number-input.svg)](https://github.com/sagiegurari/angular-number-input/blob/master/LICENSE) [![Retire Status](http://retire.insecurity.today/api/image?uri=https://raw.githubusercontent.com/sagiegurari/angular-number-input/master/bower.json)](http://retire.insecurity.today/api/image?uri=https://raw.githubusercontent.com/sagiegurari/angular-number-input/master/bower.json)

> AngularJS number input directive

* [Overview](#overview)
* [Demo](http://plnkr.co/edit/SUTiBu?p=preview)
* [Usage](#usage)
* [Installation](#installation)
* [Limitations](#limitations)
* [API Documentation](docs/api.md)
* [Contributing](.github/CONTRIBUTING.md)
* [Release History](#history)
* [License](#license)

<a name="overview"></a>
## Overview
The number-input is an angular directive which provides number validation, parsing and formatting capabilities.

## Demo
[Live Demo at Plunker](http://plnkr.co/edit/Fip3UQvEi2KAjPHGnxiV?p=preview)

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

<a name="installation"></a>
## Installation
Run bower install in your project as follows:
```
bower install angular-number-input --save
```

## API Documentation
See full docs at: [API Docs](docs/api.md)

## Contributing
See [contributing guide](.github/CONTRIBUTING.md)

<a name="history"></a>
## Release History

| Date        | Version | Description |
| ----------- | ------- | ----------- |
| 2016-05-08  | v0.0.1  | Initial release |

<a name="license"></a>
## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.
