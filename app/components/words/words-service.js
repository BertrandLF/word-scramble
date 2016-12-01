'user strict';

angular.module('app.words', ['firebase'])
    .service('words', Words)

function Words($firebaseArray) {
    var wordsRef = firebase.database().ref().child('words')
    this.all = function all() {
        return $firebaseArray(wordsRef)
    }
}