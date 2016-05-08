'use strict';

module.exports = function (grunt) {
    return {
        tasks: {
            jslint: {
                full: {
                    src: [
                        'angular-number-input.js'
                    ],
                    options: {
                        edition: 'latest',
                        failOnError: true
                    },
                    directives: grunt.file.readJSON('.jslintrc')
                }
            }
        }
    };
};
