module.exports = function(grunt) {
  grunt.initConfig({
    // Make package info available to tasks
    pkg: grunt.file.readJSON('package.json'),

    // Browserify front-end modules
    browserify: {
      options: {
        browserifyOptions: {
          debug: true,
          extensions: ['.jsx', '.js']
        }
      },
      js: {
        src: ['src/browser/index.js'],
        dest: 'public/app.js'
      }
    },

    // Compile Sass stylesheets
    sass: {
      dev: {
        options: {
          sourceMap: true
        },
        files: {
          'public/app.css': 'assets/scss/app.scss'
        }
      },
      dist: {
        options: {
          sourceMap: false,
          outputStyle: 'compressed'
        },
        files: {
          'public/app.min.css': 'assets/scss/app.scss'
        }
      }
    },

    watch: {
      javascript: {
        files: ['src/browser/**/*.js', 'src/browser/**/*.jsx'],
        tasks: ['browserify']
      },
      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass:dev']
      }
    },

    // restart server node process during development
    nodemon: {
      dev: {
        script: 'bin/server.js',
        options: {
          ignore: ['node_modules/**', 'public', 'src/browser']
        }
      }
    },

    // Run dev watch tasks (and others potentially) concurrently
    concurrent: {
      dev: {
        tasks: ['watch', 'nodemon'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    uglify: {
      dist: {
        options: {
          compress: true,
          sourceMap: false
        },
        files:{
          'public/app.min.js': 'public/app.js',
        }
      }
    },

  });

  // Load third party tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-shell');

  // Default is running the local development server
  grunt.registerTask('default', ['sass:dev', 'browserify', 'concurrent:dev']);

  grunt.registerTask('collect_static', ['init_static', 'sass:dist', 'browserify', 'uglify'])
  // Custom tasks
  grunt.loadTasks('bin/tasks');
};
