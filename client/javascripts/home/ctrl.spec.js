'use strict';

describe('HomeCtrl', () => {
  let $q;
  let $controller;

  let scope;
  let ctrl;

  let CompaniesService;

  beforeEach(module('app'));

  beforeEach(inject((_$rootScope_, _$controller_, _$q_) => {
    CompaniesService = jasmine.createSpyObj('CompaniesService', ['get', 'list']);

    $q = _$q_;
    $controller = _$controller_;
    scope = _$rootScope_.$new();
  }));

  function setupCtrl() {
    ctrl = $controller('HomeCtrl', { $scope: scope, CompaniesService: CompaniesService });
  };

  describe('on init', () => {
    var companiesData = [{id: 1234}, {id: 5678}];

    beforeEach(() => {
      CompaniesService.get.and.callFake(function(){
        var def = $q.defer();

        def.resolve({collection: companiesData});

        return def.promise;
      });
      setupCtrl();
      scope.$digest();
    });

    it('exists', () => {
      expect(ctrl).toBeDefined();
    });

    it('loads the companies data', () => {
      expect(scope.companies).toBeDefined();
      expect(CompaniesService.get).toHaveBeenCalled();
      expect(scope.companies).toEqual(companiesData);
    });
  });
});
