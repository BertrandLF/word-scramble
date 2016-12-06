'user strict';

describe('timer controller', function () {

  var onDestroySet = false
  var $scope = {
    $on: function (on, fn) {
      if (on == '$destroy') {
        onDestroySet = true
      }
    }
  }
  var $intervalSpy
  var timerCtrl
  var $controller

  beforeEach(angular.mock.module('app.timer'));

  beforeEach(angular.mock.inject(function ($controller, _$interval_) {

    $intervalSpy = jasmine.createSpy('$interval spy', _$interval_).and.callThrough()

    timerCtrl = $controller('TimeCtrl', {
      $scope: $scope,
      $interval: $intervalSpy
    })
  }))

  it('should start at 40', function () {
    expect(timerCtrl.timer).toEqual(40)
  })

  it('should decrement every second', function () {
    $intervalSpy.flush(1000)
    expect(timerCtrl.timer).toEqual(39)
  })

  it('should set on destroy', function () {
    expect(onDestroySet).toBeTruthy
  })

  it('should cancel interval', function () {
    spyOn($intervalSpy, 'cancel');
    timerCtrl.cancelTimer()
    expect($intervalSpy.cancel).toHaveBeenCalled()
  })
})