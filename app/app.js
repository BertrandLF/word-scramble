'use strict';

// Declare app level module which depends on views, and components
angular
  .module('app', [
    'ngRoute',
    'firebase',
    'app.game',
    'angular.less']
  )
  .constant('wordsRef', firebase.database().ref().child('words'))
  .config(ApplicationConfig);

function ApplicationConfig($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/game', {
    templateUrl: 'game/game.html',
    controller: 'GameCtrl as ctrl',
    resolve: {
      words: function ($firebaseArray, wordsRef) {
        return $firebaseArray(wordsRef).$loaded();
      }
    }
  });
  $routeProvider.otherwise({ redirectTo: '/game' });
}
