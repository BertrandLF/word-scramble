'use strict';

angular
  .module('app.score', ['firebase'])
  .service('ScoreService', Score)

function Score() {
  this.endGame = function(finalScore) {
    console.log("Game over!!", finalScore)
  }
}