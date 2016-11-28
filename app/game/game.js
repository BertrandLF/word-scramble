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
  var wordsList = words.all()
  this.list = wordsList
}