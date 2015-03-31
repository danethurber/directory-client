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

    beforeEach(() => {
      $httpBackend.when('GET', endpoint).respond({});  
    });

    it('makes a request to the companies api', () => {
      $httpBackend.expectGET(endpoint);
      service.get();

      $httpBackend.flush();
    });

  });
});
