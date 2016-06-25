(function () {
    'use strict'
    angular.module('app.employees')
        .controller('EmployeesController')
        .directive('editableEmployee', function() {
            return {
                restict: 'A',
                templateUrl: 'app/employees/editable.employee.html'
            };
        });
})();

