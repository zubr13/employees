(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getPeople: getDepartments,
            getMessageCount: getMessageCount,
            getEmployees: getEmployees
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getEmployees(offset){
            return $http.get('/api/Employees?filter[limit]=10&filter[offset]='+offset)
                .then(success)
                .catch(fail);

            function success(response) {
                console.log("You are strong!")
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getDepts')(e);
            }
        }

        function getDepartments() {
            return $http.get('/api/Departments')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getDepts')(e);
            }
        }
    }
})();
