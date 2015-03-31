'use strict';

var Service = ($http) => {
  let endpoint = '/api/v1/companies';

  return {
    get () {
      return $http.get(endpoint).then((response) => {return response.data});
    }
  };
};

Service.$inject = ['$http'];

export default Service;
