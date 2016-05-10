(function() {
  'use strict';

  angular
    .module('dashboard')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('edition', {
        url: '/edition',
        templateUrl: 'app/edition/edition.html',
        controller: 'EditionController',
        controllerAs: 'edition'
      })

      .state('graphic', {
        url: '/graphic',
        templateUrl: 'app/graphic/graphic.html',
        controller: 'GraphicController',
        controllerAs: 'graphic'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
