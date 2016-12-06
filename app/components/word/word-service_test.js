'use strict';

describe('word service', function () {

    var $injector = angular.injector(['app.game']);
    var service = $injector.get('WordService');
    var wordList = {
        length: 2,
        $getRecord: function (index) {
            return [
                { $value: 'pour' },
                { $value: 'habit' }
            ][index - 1] //$firebaseArray starts at 1
        }
    }

    it('should pickAWord', function () {
        var picked = service.pickAWord(wordList)
        expect(picked.solution).toMatch(/[pour|habit]/)
        expect(picked.guess).toMatch(/[P,O,U,R]|[H,A,B,I,T]/)
    })

    it('should scramble a word', function () {
        var test = 'fun'
        var scrambled = service.scramble(test)
        expect(scrambled).not.toEqual(test.toUpperCase)
        expect(scrambled).toMatch(/[F,U,N]+/)
    });

    it('should compute a score correctly', function () {
        expect(service.wordScore('bar', 0)).toBe(1)
        expect(service.wordScore('groovy', 0)).toBe(3)
        expect(service.wordScore('snowboard', 0)).toBe(7)
    })

    it('should apply a penalty', function () {
        expect(service.wordScore('bar', 1)).toBe(0)
        expect(service.wordScore('groovy', 2)).toBe(1)
        expect(service.wordScore('snowboard', 3)).toBe(4)
    })

    it('should accept a correct guess ignoring the case', function () {
        expect(service.guessAccepted('yEah', 'YeAH')).toBeTruthy
    })

    it('should refuse an incorrect guess', function () {
        expect(service.guessAccepted('niceTry', 'fail')).toBeFalsy
    })
});
