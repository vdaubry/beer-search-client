'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var beerServices = angular.module('beerSearchApp.services', []);

beerServices.service('SearchService', function(){
    
    this.index = lunr(function () {
     this.field('name')
     this.field('street')
     this.field('beers')
     this.ref('id')
    });

    this.addToIndex = function(data, index) {
      data.forEach(function (document) {
        index.add(document)
      });
    }

    this.search = function(input, index) {
      return index.search(input).map(function(x) {return parseInt(x.ref)});
    }
  }
);