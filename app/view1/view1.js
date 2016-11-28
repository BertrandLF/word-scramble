'use strict';

angular
  .module('app.view1', ['ngRoute', 'firebase'])
  .config(ApplicationConfig)
  .controller('ScrambleCtrl', ScrambleCtrl);

  function ApplicationConfig($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'ScrambleCtrl'
    });
  }
  
  function ScrambleCtrl($firebaseObject) {

  }