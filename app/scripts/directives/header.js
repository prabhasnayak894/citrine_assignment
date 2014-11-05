'use strict';

/**
 * @ngdoc directive
 * @name codeApp.directive:header
 * @description
 * # header
 */
angular.module('codeApp')
  .directive('header', ['$location', function ($location) {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
      }
    };
  }]);
