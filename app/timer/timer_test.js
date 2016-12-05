'user strict';

describe('timer controller', function () {

  var $scope = {}
  var $interval
  var timerCtrl
  var $controller

  beforeEach(angular.mock.module('app.timer'));

  beforeEach(inject(function ($controller, _$interval_) {
    timerCtrl = $controller('TimeCtrl', {
      $scope: $scope
    })
    $interval = _$interval_
  }));

  it('should start at 40', function () {
    expect(timerCtrl.timer).toEqual(40)
  })

  it('should decrement every second', function () {
     $interval.flush(1000)
     expect(timerCtrl.timer).toEqual(39)
  })

})