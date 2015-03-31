'use strict';

var Service = ($http) => {
  return {
    get (companyId) {
      let endpoint = `/api/v1/companies/${companyId}/users`;

      return $http.get(`${endpoint}`).then((response) => {return response.data});
    }
  };
};

Service.$inject = ['$http'];

export default Service;
