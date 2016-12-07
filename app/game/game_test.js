'use strict';

describe('app.game module', function () {
  var $controller
  var gameCtrl
  var words
  var timeUpListener = false
  var $scope = {
    $on: function (on, fn) {
      if (on == 'timesUp') {
        timeUpListener = true
      }
    }
  }
  beforeEach(angular.mock.module('app.game'));

  beforeEach(function () {
    words = {
      $getRecord: function (index) {
        return [
          { $value: 'word1' },
          { $value: 'word2' }
        ][index - 1] //firebaseArray starts at 1
      },
      length: 2
    }
  })

  beforeEach(inject(function ($controller) {
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

    it('should listen to timesUp', function() {
      expect(timeUpListener).toBeTruthy()
    });
  });
});