'use strict';

module.exports.tasks = {
    jsdoc2md: {
        api: {
            options: {
                index: true,
                private: false
            },
            src: 'angular-number-input.js',
            dest: 'docs/api.md'
        }
    }
};
