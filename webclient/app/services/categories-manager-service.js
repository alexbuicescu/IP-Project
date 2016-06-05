(function() {

    function categoriesManager($http, $q, constants) {
        var getAll = function() {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: constants.baseUrl + "category",
                unauthenticated: false,
            }).then(function success(response) {
                deferred.resolve(response.data);
            }, function error(response) {
                deferred.reject("Categories get failed " + response.data);
            });
            return deferred.promise;
        }
        return {
            getAll: getAll
        };
    }

    angular.module("mainApp")
        .factory("categoriesManager", ['$http', '$q', 'constants', categoriesManager]);

})();