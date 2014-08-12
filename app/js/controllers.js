'use strict';

/* Controllers */

var beerSearchControllers = angular.module('beerSearchApp.controllers', [])

beerSearchControllers.controller('HomeController', ['$scope', function($scope) {
}])

beerSearchControllers.controller('BeersController', ['$scope', '$routeParams', '$http', 
  function($scope, $routeParams, $http) {
      $http.get('json/'+$routeParams.city+'.json').success(function(data) {
      $scope.bars = data;
    });
    $scope.city = $routeParams.city;
}]);
