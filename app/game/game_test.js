'use strict';

describe('app.game module', function () {
  var $controller;
  var gameCtrl;
  var words;

  beforeEach(angular.mock.module('app.game'));

  beforeEach(function () {
    words = {
      $getRecord: function (index) {
        return [
          { $value: 'word1' },
          { $value: 'word2' }
        ][index]
      },
      length: 2
    }
  })

  beforeEach(inject(function ($controller) {
    var $scope = {};
    gameCtrl = $controller('GameCtrl', {
      $scope: $scope,
      words: words
    });
  }));

  describe('game controller', function () {

    it('should initialise the game', function () {
      expect(gameCtrl.score).toEqual(0)
      expect(gameCtrl.penalty).toEqual(0)
      expect(gameCtrl.word.guess).toMatch(/[A-Z]+/)
      expect(gameCtrl.word.solution).toMatch(/[word1|word2]/)
    });

  });
});