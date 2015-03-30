'use strict';

let $inject = ['$scope'];
let Ctrl = ($scope) => {
  $scope.name = 'Guy';
};

Ctrl.$inject = $inject;

export default Ctrl;
