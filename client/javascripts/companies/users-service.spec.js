'use strict';

describe('UsersService', () => {
  let service;
  let $httpBackend;

  beforeEach(module('app'));

  beforeEach(inject((_$httpBackend_, _UsersService_) => {
    $httpBackend = _$httpBackend_;
    service = _UsersService_;
  }));


  it('works', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#get', () => {
    let companyId = 1;
    let endpoint = `/api/v1/companies/${companyId}/users`;
    let response = [{id: 1234}, {id: 5678}];

    beforeEach(() => {
      $httpBackend.when('GET', endpoint).respond(response);
    });

    it('makes a request to the companies api', () => {
      $httpBackend.expectGET(endpoint);
      service.get(companyId);

      $httpBackend.flush();
    });

    it('responds with the proper data', () => {
      $httpBackend.expectGET(endpoint);
      service.get(companyId).then((data) =>{
        expect(data).toEqual(response);
      });

      $httpBackend.flush();
    });

  });
});
