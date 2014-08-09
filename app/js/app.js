'use strict';


// Declare app level module which depends on filters, and services
var beerSearchApp = angular.module('beerSearchApp', [
  'ngRoute',
  'beerSearchApp.filters',
  'beerSearchApp.services',
  'beerSearchApp.directives',
  'beerSearchApp.controllers',
  'ui.bootstrap'
]);


beerSearchApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/beers', {templateUrl: 'partials/beers.html', controller: 'BeersController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
