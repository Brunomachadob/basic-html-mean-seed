/* global inject */

describe('MyService test', function () {

    describe('when I call myService.getNumber1', function () {
        beforeEach(module('myApp'));

        it('returns 1', inject(function (MyService) {
            expect(MyService.getNumber1()).toEqual(1);
        }));
    });


    describe('when I call myService.getAppNameAsync', function () {
        beforeEach(module('myApp'));

        var httpResponse = 'AppName';

        beforeEach(inject(function (_$httpBackend_, _MyService_, $q) {
            spyOn(_MyService_, "getAppNameAsync").and.callFake(function () {
                var deferred = $q.defer();
                deferred.resolve(httpResponse);
                return deferred.promise;
            });
        }));

        it('returns \'AppName\'', inject(function (MyService) {
            MyService.getAppNameAsync().then(function (result) {
                expect(result).toEqual(httpResponse);
            });

        }));
    });

});