'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'firebase',
  'app.view1',
  'app.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
