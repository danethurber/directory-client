'use strict';

describe('ShowCtrl', () => {
  let $q;
  let $controller;

  let scope;
  let ctrl;

  let UsersService;
  let CompaniesService;

  beforeEach(module('app'));

  beforeEach(inject((_$rootScope_, _$controller_, _$q_) => {
    UsersService = jasmine.createSpyObj('UsersService', ['get']);
    CompaniesService = jasmine.createSpyObj('CompaniesService', ['find']);

    $q = _$q_;
    $controller = _$controller_;
    scope = _$rootScope_.$new();
  }));

  function setupCtrl(routeParams={}) {
    ctrl = $controller('ShowCtrl', {
      $scope: scope,
      UsersService: UsersService,
      CompaniesService: CompaniesService,
      $routeParams: routeParams
    });
  };

  describe('on init', () => {
    var companyId = 1234;
    var usersData = [{id: 1234}, {id: 5678}];
    var companyData = {id: companyId, name: 'awesomeXcross'};

    beforeEach(() => {
      UsersService.get.and.callFake(function(){
        var def = $q.defer();

        def.resolve({collection: usersData});

        return def.promise;
      });
      CompaniesService.find.and.callFake(function(){
        var def = $q.defer();

        def.resolve(companyData);

        return def.promise;
      });
      setupCtrl({company_id: companyId});
      scope.$digest();
    });

    it('exists', () => {
      expect(ctrl).toBeDefined();
    });

    it('loads the users data', () => {
      expect(scope.users).toBeDefined();
      expect(UsersService.get).toHaveBeenCalledWith(companyId);
      expect(scope.users).toEqual(usersData);
    });

    it('loads the company data', () => {
      expect(scope.company).toBeDefined();
      // expect(CompaniesService.find).toHaveBeenCalledWith(companyId);
      // expect(scope.company).toEqual(companyData);
    });
  });
});
