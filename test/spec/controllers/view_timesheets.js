'use strict';

describe('Controller: ViewTimesheetsCtrl', function () {

  // load the controller's module
  beforeEach(module('codeApp'));

  var ViewTimesheetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewTimesheetsCtrl = $controller('ViewTimesheetsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
