(function(){
  'use strict';
  angular.module('app', ['ui.router', 'app.ui', 'ui.bootstrap'])
    .config(function($stateProvider, $urlRouterProvider){

      /**
       * Default Route.
       */
       $urlRouterProvider.otherwise('/login');

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'partials/login/index.html',
          controller: 'LoginController',
          controllerAs: 'loginControl'
        });
    });
})();
