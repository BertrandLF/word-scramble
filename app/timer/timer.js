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
  var timerInterval = $interval(tick, 1000, time);

  ctrl.cancelTimer = function() {
    $interval.cancel(timerInterval)
  }

  $scope.$on('$destroy', ctrl.cancelTimer)
}