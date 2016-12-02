'use strict';

describe('app.game module', function () {

  var $controller;
  var GameCtrl;
  var words;

  beforeEach(angular.mock.module('app.game'));

  beforeEach(function () {
    var words = ['word1', 'word2']
  })

  beforeEach(inject(function (_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('game controller', function () {

    it('should initialise the game', function () {
      var $scope = {};
      var controller = $controller('GameCtrl', {
        $scope: $scope,
        words: words
      });
      expect($scope.score).toEqual(0)
    });

  });
});