'use strict';

import angular from 'angular';
import router from 'angular-route';

let app = angular.module('app', ['ngRoute']);

app.controller('HomeCtrl', require('./home/ctrl.js'));

app.config(function($routeProvider){

  $routeProvider
    .when('/', {
      template: require('./home/template.html'),
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});
