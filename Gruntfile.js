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