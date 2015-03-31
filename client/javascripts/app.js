'use strict';

import angular from 'angular';
import router from 'angular-route';

let app = angular.module('app', ['ngRoute']);

app
  .service('UsersService', require('./companies/users-service.js'))
  .service('CompaniesService', require('./companies/service.js'))

  .controller('HomeCtrl', require('./home/ctrl.js'))
  .controller('ShowCtrl', require('./companies/show-ctrl.js'));

app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      template: require('./home/template.html'),
      controller: 'HomeCtrl'
    })
    .when('/companies/:company_id', {
      template: require('./companies/show.html'),
      controller: 'ShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});
