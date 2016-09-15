/* jshint -W117, -W030 */
describe('employees routes', function () {
    describe('state', function () {
        var view = 'app/employees/employees.html';

        beforeEach(function() {
            module('app.employees', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state employees to url /employees ', function() {
            expect($state.href('employees', {})).to.equal('/employees');
        });

        it('should map /employees route to employees View template', function () {
            expect($state.get('employees').templateUrl).to.equal(view);
        });

        it('of employees should work with $state.go', function () {
            $state.go('employees');
            $rootScope.$apply();
            expect($state.is('employees'));
        });
    });
});
