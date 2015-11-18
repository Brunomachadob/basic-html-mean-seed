module.exports = function(grunt) {

  var allJS = ['public/scripts/*.js', 'public/scripts/**/*.js', 'server/*.js', 'server/**/*.js'];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // check all js files for errors
    jshint: {
      all: allJS
    },
    
    // configure nodemon
    nodemon: {
      dev: {
        script: './server/app.js'
      }
    },
    
    watch: {
      css: {
        files: ['public/assets/css/*.css', 'public/scripts/compenents/**/*.css']
      },
      js: {
        files: allJS,
        tasks: ['jshint']
      }
    },

    
    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }   

  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  //Tasks 
  grunt.registerTask('default', ['jshint', 'concurrent']);
};