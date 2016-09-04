'use strict';

describe('Service: alertObj', function () {

  // load the service's module
  beforeEach(module('psJwtApp'));

  // instantiate service
  var alertObj;
  beforeEach(inject(function (_alertObj_) {
    alertObj = _alertObj_;
  }));

  it('should do something', function () {
    expect(!!alertObj).toBe(true);
  });

});
