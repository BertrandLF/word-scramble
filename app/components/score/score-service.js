'use strict';

angular
  .module('app.score', ['firebase'])
  .service('ScoreService', Score)

function Score() {
  this.endGame = function() {
    console.log("Game over!!")
  }
}