'use strict';

/**
 * @ngdoc function
 * @name beerSearchClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beerSearchClientApp
 */
angular.module('beerSearchClientApp')
  .controller('BeersCtrl', ['$scope', '$routeParams', '$http', 'SearchService',
  function($scope, $routeParams, $http, SearchService) {
    $scope.loading=1;

    $http.get('json/'+$routeParams.city+'.json').success(function(data) {
      $scope.bars = data;

      //We should not pass the index to theaddToIndex function: How can we access the index directly from the addToIndex function ?
      SearchService.addToIndex(data)

      $scope.loading=0;
    });
    $scope.city = $routeParams.city;
  }]);