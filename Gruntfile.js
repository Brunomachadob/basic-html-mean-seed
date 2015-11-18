module.exports = function (grunt) {

  var allClientLess = ['public/assets/css/*.less', 'public/scripts/*.less'];

  var allClientJS = [
    'public/scripts/*.module.js',
    'public/scripts/*.controller.js',
    'public/scripts/**/*.js',
    '!public/**/*.spec.js',
  ];

  var allJS = allClientJS.concat(['server/*.js', 'server/**/*.js']);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    tpModuleName: '<%= pkg.appModule %>.tpls',
    tplFile: 'dist/app.tpls.js',

    distCssFile: 'dist/app.min.css',
    distLessFile: 'dist/app.less',

    clean: {
      before: ['dist/{,*/}*'],
      after: ['<%= tplFile %>', '<%= distLessFile %>']
    },
    
    // check all js files for errors
    jshint: {
      all: allJS
    },

    html2js: {
      options: {
        base: 'public',
        module: '<%= tpModuleName %>',
        singleModule: true,
        useStrict: true,
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      main: {
        src: ['public/views/partials/*.html', 'public/scripts/**/*.tpl.html'],
        dest: '<%= tplFile %>'
      }
    },

    uglify: {
      options: {
        mangle: {
          except: ['angular']
        }
      },
      app: {
        files: {
          'dist/app.min.js': allClientJS
        }
      }
    },

    less: {
      development: {
        options: {
          ieCompat: false,
          strictMath: true
        },
        src: '<%= distLessFile %>',
        dest: '<%= distCssFile %>'
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        keepSpecialComments: '0'
      },
      target: {
        files: {
          '<%= distCssFile %>': '<%= distCssFile %>'
        }
      }
    },

    concat: {
      concatTpls: {
        dest: 'dist/app.min.js',
        src: ['dist/app.min.js', '<%= tplFile %>']
      },
      less: {
        src: allClientLess,
        dest: '<%= distLessFile %>'
      }
    },

    // configure nodemon
    nodemon: {
      dev: {
        script: './server/app.js'
      }
    },

    watch: {
      css: {
        files: ['public/assets/css/*.less', 'public/scripts/components/**/*.less']
      },
      js: {
        files: allJS,
        tasks: ['default']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-karma');
  
  //Tasks
  grunt.registerTask('default', ['build']);
  
  grunt.registerTask('build', ['clean:before', 'jshint', 'uglify', 'html2js', 'concat', 'less', 'cssmin', 'clean:after', 'karma']);

  grunt.registerTask('serve', ['concurrent']);

  grunt.registerTask('dev', ['default', 'serve']);
  
  grunt.registerTask('test', ['default', 'karma']);


};