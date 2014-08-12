'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var beerServices = angular.module('beerSearchApp.services', []);

// phonecatServices.factory('Beers', ['$resource',
//   function($resource){
//     return $resource('json/:city.json', {}, {
//       query: {method:'GET', params:{city:'beers'}, isArray:true}
//     });
//   }]);
