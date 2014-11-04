'use strict';

describe('Service: timeEntries', function () {

  // load the service's module
  beforeEach(module('codeApp'));

  // instantiate service
  var timeEntries;
  beforeEach(inject(function (_timeEntries_) {
    timeEntries = _timeEntries_;
  }));

  it('should do something', function () {
    expect(!!timeEntries).toBe(true);
  });

});
