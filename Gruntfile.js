module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      minify: {
        expand: true,
        cwd: 'app/css',
        src: ['app.css'],
        dest: 'build/css',
        ext: '.min.css'
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'app/bower_components/',
        src: ['**/*.js'],
        dest: 'build/intermediate/js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'build/js/output.min.js': ['app/js/*.js', 'build/intermediate/js/**/*.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('deploy', ['cssmin', 'copy', 'uglify']);
};