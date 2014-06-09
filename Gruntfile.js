'use strict';

module.exports = function(grunt) {
  	// Do grunt-related things in here
  	// load all grunt tasks
  	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  	grunt.loadNpmTasks('grunt-open');

  	grunt.initConfig({

	  	// Watches files for changes and runs tasks based on the changed files
	  	watch: {
			js: {
	        	files: ['js/{,*/}*.js'],
	        	tasks: ['uglify'],
	      	},
	      	sass: {
		        files: ['sass/{,*/}*.{scss,sass}'],
		        tasks: ['compass:dev']
		    },
		    livereload: {
		    	files: ['*.html', 'css/*.css', 'img/*', 'js/*.js'],
        		options: {
        			livereload: '<%= connect.options.livereload %>'
        		}
			}
	  	},

	    compass: {
	      dev: {
	        options: {
	          config: 'config.rb',
	          force: true
	        }
	      }
	    },

		// The actual grunt server settings
	    connect: {
	       	options: {
	    		port: 9000,
	    		livereload: 35729,	
	    		hostname: 'localhost'
	    	},
	    	livereload: {
	    		open: true,
	            base: '.'
	    	}		    
	    },

	    open : {
		    dev : {
		      	path: 'http://localhost:9000/'
		    }
		}	
  	});  	

  	grunt.registerTask('default', [
  		'open:dev',
  		'connect:livereload',
  		'watch'
  	]);

};