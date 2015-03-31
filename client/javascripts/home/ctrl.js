'use strict';

var Ctrl = ($scope, CompaniesService) => {
  $scope.companies = [];

  CompaniesService.get().then((data) => {
    $scope.companies = data.collection;
  });
};

Ctrl.$inject = ['$scope', 'CompaniesService'];

export default Ctrl;
