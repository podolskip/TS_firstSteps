#TS playground

Repo created to play with TS.

Setting environment:

1) Initiallize git project

git init

2) Install typescript both locally and globally

npm install typescript -g
npm install typescript --save-dev

3) Initialize typesctipt config file tsconfig.json

tsc init

4) Install Grunt locally and globally

npm install grunt -g
npm install grunt --save-dev

5) Install Grunt Cli globally

npm install grunt-cli -g

6) Install Grunt dependencies grunt-ts / grunt-browserify / tsify

npm install -g grunt-ts
npm install -g grunt-browserify
npm install -g tsify

6) Initialize Grunt config file Gruntfile.json

touch Gruntfile.js

7) Configure Gruntfile.json e.g.

module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('tsify');

    grunt.initConfig({
        ts:{
            main:{
                src:['./typescript/*.ts'],
                dest:'./bundle/JS',
                options: {
                    rootDir: "./typescript/",
                    sourcemap: 'none'
                  }
            }
        },
        browserify:{
            dist: {
                files: {
                  './bundle/JS/main.js': ['./typescript/*.ts']
                },
                options: {
                  plugin: ['tsify']
                }
              }
        }
    });

    grunt.registerTask('default', ['browserify']);
};

