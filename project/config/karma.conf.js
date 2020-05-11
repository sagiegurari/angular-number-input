/*global module: false, require: false */

module.exports = function (config) {
    'use strict';

    const mainJSFile = 'angular-number-input.js';
    const commons = require('js-project-commons');

    commons.tools.karma(config, {
        files: [
            '**/big.js/big.js',
            '**/jquery/dist/jquery.js',
            '**/angular/angular.js',
            '**/angular-mocks/angular-mocks.js',
            'test/helpers/**/*.js',
            mainJSFile,
            'test/spec/**/*.js'
        ]
    }, mainJSFile);
};
