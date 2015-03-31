'use strict';

var Service = ($http) => {
  let endpoint = '/api/v1/companies';

  return {
    get () {
      return $http.get(endpoint);
    }
  };
};

Service.$inject = ['$http'];

export default Service;
