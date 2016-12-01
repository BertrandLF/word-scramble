'use strict';

module.exports = function (karma) {
  karma.set({

    frameworks: ['jasmine', 'browserify'],

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/firebase/firebase.js',
      'app/bower_components/angularfire/dist/angularfire.js',
      'app/app.js',
      'app/game/game.js',
      'app/components/**/*.js',
      'app/**/*_test.js'
    ],

    preprocessors: {
      'app/**/*.js': ['browserify']
    },

    browsers: ['Chrome'],

    logLevel: 'LOG_DEBUG',

    singleRun: false,
    autoWatch: true,
    reporters: ['progress'],

    browserify: {
      debug: true
    }

  });
};