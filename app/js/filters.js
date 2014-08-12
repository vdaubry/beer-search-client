'use strict';

/* Filters */

angular.module('beerSearchApp.filters', []).
  filter('search', ['SearchService', function(SearchService) {
    return function (items, inputText) {
      if(items != undefined) {
        var searchResults = SearchService.search(inputText, SearchService.index);

        var filtered = [];
        for (var i = 0; i < searchResults.length; i++) {
          filtered.push(items[searchResults[i]]);
        }
      }
      return filtered;
    };
  }]);