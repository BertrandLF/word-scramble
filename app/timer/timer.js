angular
  .module('app.timer', [])
  .controller('TimeCtrl', TimeCtrl);

function TimeCtrl($scope, $interval) {
  var ctrl = this
  var time = 40
  ctrl.timer = time
  var tick = function () {
    ctrl.timer -= 1;
  }
  $interval(tick, 1000, time);
}