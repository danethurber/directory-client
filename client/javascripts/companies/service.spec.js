'use strict';

describe('CompaniesService', () => {
  let service;
  let $httpBackend;

  beforeEach(module('app'));

  beforeEach(inject((_$httpBackend_, _CompaniesService_) => {
    $httpBackend = _$httpBackend_;
    service = _CompaniesService_;
  }));


  it('works', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#get', () => {
    let endpoint = '/api/v1/companies';
    let response = [{id: 1234}, {id: 5678}];

    beforeEach(() => {
      $httpBackend.when('GET', endpoint).respond(response);
    });

    it('makes a request to the companies api', () => {
      $httpBackend.expectGET(endpoint);
      service.get();

      $httpBackend.flush();
    });

    it('responds with the proper data', () => {
      $httpBackend.expectGET(endpoint);
      service.get().then((data) =>{
        expect(data).toEqual(response);
      });

      $httpBackend.flush();
    });

  });

  describe('#find', () => {
    let companyId = 666;
    let endpoint = `/api/v1/companies/${companyId}`;
    let response = {id: companyId, name: 'some name'};

    beforeEach(() => {
      $httpBackend.when('GET', endpoint).respond(response);
    });

    it('makes a request to the companies api with the company id', () => {
      $httpBackend.expectGET(endpoint);
      service.find(companyId);

      $httpBackend.flush();
    });

    it('responds with the proper data', () => {
      $httpBackend.expectGET(endpoint);
      service.find(companyId).then((data) =>{
        expect(data).toEqual(response);
      });

      $httpBackend.flush();
    });

  });
});
