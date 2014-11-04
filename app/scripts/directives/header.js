'use strict';

/**
 * @ngdoc directive
 * @name codeApp.directive:header
 * @description
 * # header
 */
angular.module('codeApp')
  .directive('header', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
