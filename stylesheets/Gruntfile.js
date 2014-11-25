/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
        dist: { 
            options: {
                style: 'compressed'
            },
            files: {
                'css/Custom.css' : 'sass/Custom.scss'
            }
        }
    },
    watch: {
        files:['sass/*.scss'],
        tasks:['sass'] 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
};
