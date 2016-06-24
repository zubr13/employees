(function () {
    'use strict';

    angular
        .module('app.employees')
        .controller('EmployeesController', EmployeesController);

    /* @ngInject */
    function EmployeesController(employees, logger) {
        var vm = this;
        vm.title = 'Employees';
        vm.employees = [];
        vm.editEmployee = editEmployee;
        vm.deleteEmployee = deleteEmployee;
        vm.toggleEditMode = toggleEditMode;

        activate();

        function activate() {
            getEmployees(10);
        }

        function getEmployees(limit) {
            return employees.getEmployees(limit).then(function (data) {
                vm.employees = data;
                vm.employees.forEach(function (item) {
                    item.disabled = true;
                });
                return vm.employees;
            });
        }

        function toggleEditMode(id) {
            var employee = {};

            vm.employees.forEach(function (item) {
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

            for(var i = 0; i < vm.employees.length; i++){
                if(vm.employees[i].empNo === id){
                    vm.employees.splice(i, 1);
                }
            }
        }

    }
})();
