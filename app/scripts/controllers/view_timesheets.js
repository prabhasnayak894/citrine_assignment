'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:ViewTimesheetsCtrl
 * @description
 * # ViewTimesheetsCtrl
 * Controller of the codeApp
 */
angular.module('codeApp')
  .controller('ViewTimesheetsCtrl', ['$scope', 'timeEntries', function ($scope, timeEntries) {
    $scope.entries = timeEntries.entries;
  }]);
