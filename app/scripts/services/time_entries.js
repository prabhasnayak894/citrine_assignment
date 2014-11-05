'use strict';

/**
 * @ngdoc service
 * @name codeApp.timeEntries
 * @description
 * # timeEntries
 * Service in the codeApp.
 */
angular.module('codeApp')
  .service('timeEntries',['$http', function timeEntries( $http) {
    this.entries = {};
    this.get_timeEnteries = function() {
    	var details = this;
    	try {
	        $http.get('scripts/details.json').success(function (data) {
	        	details.entries = data.details;
	        })
	        .error(function () {
	        })
	        .then(function () {
	        });                     
	    }
	    catch (eX) {
	        console.dir(eX);
	    }
    }
  }]);
