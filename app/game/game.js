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
  var storedWords = words.all()
  var remainingWords = []

  storedWords.$loaded().then(function () {
    angular.forEach(storedWords, function (value, key) {
      remainingWords.push(value)
    })
    var currentWord = remainingWords[0]
    $scope.guess = currentWord.$value
    $scope.solution = currentWord.$id
  })

  this.list = remainingWords
  $scope.evaluateGuess = function (keyEvent) {
    if (stringsMatch($scope.guessValue, $scope.solution)) {
      $scope.message = "You win!"
    } else {
      $scope.message = ""
    }
  }
}
function stringsMatch(guess, solution) {
  return guess.toUpperCase() === solution.toUpperCase()
}
