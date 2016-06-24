(function () {
    'use strict';

    angular
        .module('app.employees')
        .factory('employees', employees);

    /* @ngInject */
    function employees($http, exception) {
        var service = {
            getEmployees: getEmployees,
            deleteEmployee: deleteEmployee,
            editEmployee: editEmployee
        };

        return service;

        function getEmployees(limit){
            return $http.get('/api/Employees?filter[limit]='+ limit)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getDepts')(e);
            }
        }

        function deleteEmployee(id){
            return $http.delete('http://localhost:8001/api/Employees/'+id)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getDepts')(e);
            }
        }

        function editEmployee(id, firstName, lastName){
            return $http.put('http://localhost:8001/api/Employees/'+id, {"firstName": firstName, "lastName": lastName})
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response.data);
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getDepts')(e);
            }
        }
    }
})();
