'use strict';

/**
 * @ngdoc overview
 * @name beerSearchClientApp
 * @description
 * # beerSearchClientApp
 *
 * Main module of the application.
 */
angular
  .module('beerSearchClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/:city/beers', {
        templateUrl: 'views/beers.html',
        controller: 'BeersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
