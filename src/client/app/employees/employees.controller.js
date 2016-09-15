(function () {
    'use strict';

    angular
        .module('app.employees')
        .controller('EmployeesController', EmployeesController);

    /* @ngInject */
    function EmployeesController($scope, employees, logger) {
        $scope.title = 'Employees';
        $scope.employees = [];
        $scope.editEmployee = editEmployee;
        $scope.deleteEmployee = deleteEmployee;
        $scope.toggleEditMode = toggleEditMode;

        activate();

        function activate() {
            getEmployees(10);
        }

        function getEmployees(limit) {
            return employees.getEmployees(limit).then(function (data) {
                $scope.employees = data;
                $scope.employees.forEach(function (item) {
                    item.disabled = true;
                });
                return $scope.employees;
            });
        }

        function toggleEditMode(id) {
            var employee = {};

            $scope.employees.forEach(function (item) {
                if(item.empNo === id){
                    item.disabled = !item.disabled;
                    employee = item;
                }
            });
            return employee;
        }

        function editEmployee(id) {
            var employee = toggleEditMode(id);
            employees.editEmployee(id, employee.firstName, employee.lastName);
        }
        function deleteEmployee(id) {
            employees.deleteEmployee(id);

            for(var i = 0; i < $scope.employees.length; i++){
                if($scope.employees[i].empNo === id){
                    $scope.employees.splice(i, 1);
                }
            }
            logger.info("Employee is deleted")
        }

    }
})();
