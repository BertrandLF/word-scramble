'use strict';

angular
  .module('app.word', [])
  .service('WordService', Words)

function Words() {

  this.pickAWord = function (wordList) {
    var index = Math.floor(wordList.length * Math.random())
    var currentWord = wordList.$getRecord(index).$value
    return {
      guess: this.scramble(currentWord),
      solution: currentWord
    }
  }

  this.scramble = function (word) {
    function randomSort(a, b) {
      return Math.random() > .5 ? -1 : 1;
    }
    var scrambled = word.split('').sort(randomSort).join('').toUpperCase();
    return word.toUpperCase() != scrambled ? scrambled : this.scramble(word);
  }

  this.wordScore = function (word, penalty) {
    return Math.max(0, Math.floor(Math.pow(1.95, (word.length / 3))) - penalty)
  }

  this.guessAccepted = function (guess, solution) {
    return guess.toUpperCase() === solution.toUpperCase()
  }
}