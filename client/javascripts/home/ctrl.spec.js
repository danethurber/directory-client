'use strict';

describe('HomeCtrl', () => {
  let scope;
  let ctrl;

  beforeEach(module('app'));

  beforeEach(inject((_$rootScope_, _$controller_) => {
    scope = _$rootScope_.$new();
    ctrl = _$controller_('HomeCtrl', { $scope: scope });
  }));


  it('works', () => {
    expect(true).toBeTruthy();
  })
});
