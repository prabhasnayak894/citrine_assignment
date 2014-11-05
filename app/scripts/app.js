'use strict';

/**
 * @ngdoc overview
 * @name codeApp
 * @description
 * # codeApp
 *
 * Main module of the application.
 */
angular
  .module('codeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/add_time.html',
        controller: 'AddTimeCtrl'
      })
      .when('/view_timesheets', {
        templateUrl: 'views/view_timesheets.html',
        controller: 'ViewTimesheetsCtrl',
        resolve: {
          entries : ['timeEntries', function (timeEntries) {
            return timeEntries.get_timeEnteries();
        }]}
      })
      .otherwise({
        redirectTo: '/'
      });
  });
