module.exports = function (grunt) {
    "use strict";
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('tsify');

    grunt.initConfig({
        ts: {
            main: {
                src: ['./typescript/*.ts'],
                dest: './bundle/JS',
                options: {
                    rootDir: "./typescript/",
                    sourcemap: 'none'
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    './typescript/advancedTypeScriptLab_async/JS/advancedTypeScriptLab.js': ['./typescript/advancedTypeScriptLab_async/JS/*.ts']
                },
                options: {
                    plugin: ['tsify']
                }
            }
        },
        browserify2: {
            dist: {
                files: {
                    './bundle/JS/rollDice.js': ['./typescript/diceRollApp.ts']
                },
                options: {
                    plugin: ['tsify']
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify']);
};