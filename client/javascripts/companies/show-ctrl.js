'use strict';

var Ctrl = ($scope, $routeParams, UsersService, CompaniesService) => {
  $scope.company = [];
  $scope.users = [];

  UsersService.get($routeParams.company_id).then((data) => {
    $scope.users = data.collection;
  });
  CompaniesService.find($routeParams.company_id).then((data) => {
    $scope.company = data;
  });
};

Ctrl.$inject = ['$scope', '$routeParams',  'UsersService', 'CompaniesService'];

export default Ctrl;
