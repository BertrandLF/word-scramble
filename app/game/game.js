'use strict';

angular
  .module('app.game', ['ngRoute', 'app.words'])
  .controller('GameCtrl', GameCtrl)

function GameCtrl($scope, words) {
  var ctrl = this

  initGame(ctrl, words)

  ctrl.evaluateGuess = function (keyEvent) {
    if (stringsMatch(ctrl.guessValue, ctrl.solution)) {
      wordFound(ctrl, ctrl.solution)
    } else if (keyEvent.code.match("Delete|Backspace")) {
      ctrl.penalty += 1
    }
  }
}

function initGame(ctrl, words) {
  ctrl.penalty = 0
  ctrl.score = 0
  var storedWords = words.all()
  var remainingWords = []

  storedWords.$loaded().then(function () {
    angular.forEach(storedWords, function (value, key) {
      remainingWords.push(value)
    })
    ctrl.remainingWords = remainingWords
    pickAWord(ctrl)
  })
}

function pickAWord(ctrl) {
  if (ctrl.remainingWords.length > 0) {
    var currentWord = ctrl.remainingWords.shift()
    ctrl.guess = currentWord.$value
    ctrl.solution = currentWord.$id
  } else {
    ctrl.message = "No more words!"
  }
}

function wordFound(ctrl, word) {
  ctrl.score += wordScore(word, ctrl.penalty)
  ctrl.message = "Correct!"
  ctrl.guessValue = ""
  ctrl.penalty = 0
  pickAWord(ctrl)
}

function wordScore(word, penalty) {
  return Math.max(0, Math.floor(Math.pow(1.95, (word.length / 3))) - penalty)
}

function stringsMatch(guess, solution) {
  return guess.toUpperCase() === solution.toUpperCase()
}
