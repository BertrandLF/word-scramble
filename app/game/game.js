'use strict';

angular
  .module('app.game', ['ngRoute', 'app.word'])
  .controller('GameCtrl', GameCtrl)

function GameCtrl($scope, words, WordService) {
  var ctrl = this
  var s = WordService

  initGame(ctrl, words)

  ctrl.evaluateGuess = function (keyEvent) {
    if (s.guessAccepted(ctrl.guessValue, ctrl.word.solution)) {
      wordFound(ctrl, ctrl.word.solution, s)
    } else if (keyEvent.code.match("Delete|Backspace")) {
      ctrl.penalty += 1
    }
  }

  function initGame(ctrl, words) {
    ctrl.penalty = 0
    ctrl.score = 0
    ctrl.storedWords = words
    ctrl.word = s.pickAWord(ctrl.storedWords)
  }

  function wordFound(ctrl, word) {
    ctrl.score += s.wordScore(word, ctrl.penalty)
    ctrl.message = "Correct!"
    ctrl.guessValue = ""
    ctrl.penalty = 0
    ctrl.word = s.pickAWord(ctrl.storedWords)
  }
}
