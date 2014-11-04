'use strict';

describe('Controller: AddTimeCtrl', function () {

  // load the controller's module
  beforeEach(module('codeApp'));

  var AddTimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddTimeCtrl = $controller('AddTimeCtrl', {
      $scope: scope
    });
  }));
});
