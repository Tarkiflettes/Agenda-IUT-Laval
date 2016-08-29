var agendaIUTLaval = angular.module("agendaIUTLaval", ['ui.router']);

agendaIUTLaval.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('root', {
      views: {
        'header': {
          templateUrl: 'app/common/headerView.html',
          controller: 'HeaderController',
          controllerAs: 'header'
        },
        'content': {
          template: '<div ui-view></div>'
        }
      }
    })
  .state('root.listAgendas', {
    url: '/',
    templateUrl: 'app/listAgendas/listAgendasView.html',
    controller: 'ListAgendasController',
    controllerAs: 'la',
  })
  .state('root.agenda', {
    url: '/:id',
    templateUrl: 'app/agenda/agendaView.html',
    controller: 'agendaController',
    controllerAs: 'agenda',
  });

});

