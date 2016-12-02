'use strict';

describe('app.game module', function () {
  var $controller;
  var GameCtrl;
  var words;

  beforeEach(angular.mock.module('app.game'));

  beforeEach(function () {
    words = {
      $keyAt: function (index) { return ['word1', 'word2'][index] },
      length: 2
    }
  })

  beforeEach(inject(function ($controller) {
    var $scope = {};
    GameCtrl = $controller('GameCtrl', {
      $scope: $scope,
      words: words
    });
  }));

  describe('game controller', function () {

    it('should initialise the game', function () {
      expect(GameCtrl.score).toEqual(0)
      expect(GameCtrl.penalty).toEqual(0)
      expect(GameCtrl.word.guess).toMatch(/[A-Z]+/)
      expect(GameCtrl.word.solution).toMatch(/[word1|word2]/)
    });

  });
});