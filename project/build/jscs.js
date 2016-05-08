'use strict';

module.exports.tasks = {
    jscs: {
        full: {
            options: {
                config: '.jscs.json'
            },
            files: {
                src: [
                    'angular-number-input.js',
                    'Gruntfile.js',
                    '<%=BuildConfig.buildDirectory%>/**/*.js'
                ]
            }
        }
    }
};
