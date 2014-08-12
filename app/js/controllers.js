'use strict';

/* Controllers */

var beerSearchControllers = angular.module('beerSearchApp.controllers', [])

beerSearchControllers.controller('HomeController', ['$scope', function($scope) {
}])

beerSearchControllers.controller('BeersController', ['$scope', '$routeParams', '$http', 'SearchService',
  function($scope, $routeParams, $http, SearchService) {
    $scope.loading=1;

    $http.get('json/'+$routeParams.city+'.json').success(function(data) {
      $scope.bars = data;

      //We should not pass the index to theaddToIndex function: How can we access the index directly from the addToIndex function ?
      SearchService.addToIndex(data, SearchService.index)

      $scope.loading=0;
    });
    $scope.city = $routeParams.city;
}]);
