module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: {
        dist: '/*!\n'+
               ' * <%= pkg.name %> v<%= pkg.version %> - <%= pkg.description %>\n'+
               ' */\n'
      },
      outputDir: 'js/dist',
      output : '<%= meta.outputDir %>/<%= pkg.main %>',
      outputMin : '<%= meta.outputDir %>/<%= pkg.main.replace("js", "min.js") %>'
    },

    riot: {
      options: {
        concat : true,
        modular: {
          type: 'umd',
          deps: [
            'riot',
          ]
        }
      },
      dist: {
        src: 'js/src/riot/tags/*.tag',
        dest: 'js/src/riot/todo.js',
        ext: '.js',
      }
    },

    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: [
          'node_modules/riot/riot.min.js',
          'js/src/*.js',
          'js/src/riot/*.js',
        ],
        dest: '<%= meta.output %>.js'
      }
    },

    uglify: {
      dist: {
        options: {
          banner: '<%= meta.banner.dist %>'
        },
        files: {
          '<%= meta.outputDir %>/<%= pkg.main %>.min.js': ['<%= concat.dist.dest %>']
        }
      },
    },

    jshint: {
      files: [
        'Gruntfile.js',
        'js/src/*.js',
      ]
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-riot');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', [
    'test',
    'riot',
    'concat',
    'uglify'
  ]);

};