(function() {
    'use strict';

    angular
        .module('app.employees')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'employees',
                config: {
                    url: '/employees',
                    templateUrl: 'app/employees/employees.html',
                    controller: 'EmployeesController',
                    controllerAs: 'vm',
                    title: 'Employees',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Employees'
                    }
                }
            }
        ];
    }
})();
