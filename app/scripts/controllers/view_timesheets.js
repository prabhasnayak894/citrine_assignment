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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   	timeEntries.get_timeEnteries();
   	$scope.details = timeEntries.timeEnteries;
   /* $scope.showDetails = function() {
    	console.log("shdfgbiuyshdfb")
   		timeEntries.get_timeEnteries();
    };*/
  }]);
