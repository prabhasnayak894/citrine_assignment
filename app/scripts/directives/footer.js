'use strict';

/**
 * @ngdoc directive
 * @name codeApp.directive:footer
 * @description
 * # footer
 */
angular.module('codeApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
