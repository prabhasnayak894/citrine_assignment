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
    $scope.total_hrs = 0;
    $scope.total_mins = 0 ; 

    $scope.$watch($scope.entries, function( newValue, oldValue ) {

      for (var i in $scope.entries) {
        var detail = $scope.entries[i];
        var hrs = detail.duration.split(" ");
        $scope.total_hrs += parseInt(hrs[0],10);

        if (hrs[2]) {
          $scope.total_mins += parseInt(hrs[2],10);  
          if ($scope.total_mins >= 60) {
            $scope.total_hrs += parseInt($scope.total_mins/60);
            $scope.total_mins = $scope.total_mins%60;
          }
        }
        
      };
    });
   
    $scope.changeSorting = function(column) {
        
    };
  }]);
