/* jshint -W117, -W030 */
describe('EmployeesController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.employees');
        bard.inject('$controller', '$log', '$rootScope');
    });

    beforeEach(function () {
        controller = $controller('EmployeesController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Employees controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Employees', function() {
                expect(controller.title).to.equal('Employees');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
