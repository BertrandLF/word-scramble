'use strict';

angular
  .module('app.game', ['ngRoute'])
  .controller('GameCtrl', GameCtrl)

function GameCtrl($scope, words) {
  var ctrl = this

  initGame(ctrl, words)

  ctrl.evaluateGuess = function (keyEvent) {
    if (stringsMatch(ctrl.guessValue, ctrl.word.solution)) {
      wordFound(ctrl, ctrl.word.solution)
    } else if (keyEvent.code.match("Delete|Backspace")) {
      ctrl.penalty += 1
    }
  }
}

function initGame(ctrl, words) {
  ctrl.penalty = 0
  ctrl.score = 0
  ctrl.storedWords = words
  ctrl.word = pickAWord(ctrl)
}

function wordFound(ctrl, word) {
  ctrl.score += wordScore(word, ctrl.penalty)
  ctrl.message = "Correct!"
  ctrl.guessValue = ""
  ctrl.penalty = 0
  ctrl.word = pickAWord(ctrl)
}

function pickAWord(ctrl) {
  var index = Math.floor(ctrl.storedWords.length * Math.random())
  var currentWord = ctrl.storedWords.$keyAt(index)
  return {
    guess: scramble(currentWord),
    solution: currentWord
  }
}

function scramble(word) {
  function randomSort(a, b) {
    return Math.random() > .5 ? -1 : 1;
  }
  return word.split('').sort(randomSort).join('').toUpperCase();
}

function wordScore(word, penalty) {
  return Math.max(0, Math.floor(Math.pow(1.95, (word.length / 3))) - penalty)
}

function stringsMatch(guess, solution) {
  return guess.toUpperCase() === solution.toUpperCase()
}
