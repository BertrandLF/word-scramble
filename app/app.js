'use strict';

// Declare app level module which depends on views, and components
angular
  .module('app', [
    'ngRoute',
    'firebase',
    'app.game',
    'angular.less']
  )
 .config(ApplicationConfig);

function ApplicationConfig($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/game', {
    templateUrl: 'game/game.html',
    controller: 'GameCtrl as ctrl'
  });
  $routeProvider.otherwise({redirectTo: '/game'});
}
