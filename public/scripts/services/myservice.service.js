/* global angular */
(function () {
    'use strict';

    angular
        .module('myApp')
        .service('MyService', ['$q', '$http', MyService]);

    function MyService($q, $http) {
        var self = this;
        
        self.getAppName = getAppName;
        
        function getAppName(){
            var deferred = $q.defer();
            
            $http({ method: 'GET', url: '/api/name' })
            .success(function (data, status, headers, config) {
                deferred.resolve(data.name);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            });
            
            return deferred.promise;
        }

        
    }

})();
