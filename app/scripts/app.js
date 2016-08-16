'use strict';

/**
 * @ngdoc overview
 * @name darsiaFrontApp
 * @description
 * # darsiaFrontApp
 *
 * Main module of the application.
 */
angular
  .module('darsiaFrontApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'mapctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
