'use strict';

angular
  .module('app.game', ['ngRoute', 'firebase'])
  .controller('GameCtrl', GameCtrl)
  .service('words', Words)

function Words($firebaseArray) {
  var wordsRef = firebase.database().ref().child('words')
  this.all = function all() {
    return $firebaseArray(wordsRef)
  }
}

function GameCtrl($scope, words) {
  $scope.penalty = 0
  $scope.score = 0
  var storedWords = words.all()
  var remainingWords = []

  storedWords.$loaded().then(function () {
    angular.forEach(storedWords, function (value, key) {
      remainingWords.push(value)
    })
    $scope.remainingWords = remainingWords
    pickAWord($scope)
  })

  this.list = remainingWords
  $scope.evaluateGuess = function (keyEvent) {
    if (stringsMatch($scope.guessValue, $scope.solution)) {
      wordFound($scope, $scope.solution)
    } else if (keyEvent.code.match("Delete|Backspace")) {
      $scope.penalty += 1
      console.log("Penalty!", keyEvent, $scope.penalty)
    }
  }
}

function wordFound($scope, word) {
  $scope.message = "Correct!"
  $scope.guessValue = ""
  $scope.score += wordScore(word, $scope.penalty)
  pickAWord($scope)
}

function pickAWord($scope) {
  if ($scope.remainingWords.length > 0) {
    var currentWord = $scope.remainingWords.shift()
    $scope.guess = currentWord.$value
    $scope.solution = currentWord.$id
  } else {
    $scope.message = "No more words!"
  }
}

function wordScore(word, penalty) {
  return Math.max(0, Math.floor(Math.pow(1.95, (word.length / 3))) - penalty)
}

function stringsMatch(guess, solution) {
  return guess.toUpperCase() === solution.toUpperCase()
}
