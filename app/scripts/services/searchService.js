'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var beerServices = angular.module('beerSearchClientApp');
beerServices.service('SearchService', function(){
    
    this.index = lunr(function () {
     this.field('name')
     this.field('street')
     this.field('beers')
     this.ref('id')
    });

    this.addToIndex = function(data) {
      var currentIndex = this.index;
      data.forEach(function (document) {
        currentIndex.add(document);
      });
    }

    this.search = function(input) {
      return this.index.search(input).map(function(x) {return parseInt(x.ref)});
    }
  }
);