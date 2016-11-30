'use strict';

describe('app.game module', function() {
  beforeEach(angular.mock.module('app.game'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('game controller', function(){

    it('should initialise the game', function() {
      var $scope = {};
      var controller = $controller('GameCtrl', { $scope: $scope });
      expect($scope.score).toEqual(0)
    });

  });
});