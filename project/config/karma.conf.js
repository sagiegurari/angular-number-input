/*global module: false, require: false */

module.exports = function (config) {
    'use strict';

    var mainJSFile = require('../../bower.json').main;
    var commons = require('js-project-commons');

    commons.tools.karma(config, {
        files: [
            'bower_components/big.js/big.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'test/helpers/**/*.js',
            mainJSFile,
            'test/spec/**/*.js'
        ]
    }, mainJSFile);
};
