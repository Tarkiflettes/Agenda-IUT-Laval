var agendaIUTLaval = angular.module("agendaIUTLaval", 
    [
    'ui.router', 
    'ui.calendar', 
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    'ngMdIcons',
    'ngMaterialSidemenu'
    ]
    );

agendaIUTLaval.config(
    function(
      $stateProvider, 
      $urlRouterProvider, 
      $locationProvider, 
      $urlMatcherFactoryProvider, 
      $mdThemingProvider,
      $mdIconProvider
      ) {

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('root', {
      views: {
        'sidenav': {
          templateUrl: 'app/common/sidenavView.html',
          controller: 'SidenavController',
          controllerAs: 'sidenav'
        },
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
  .state('root.about', {
    url: '/a',
    templateUrl: 'app/about/aboutView.html',
    controller: 'AboutController',
    controllerAs: 'about'
  })
  .state('root.agenda', {
    url: '/:id?view&date',
    templateUrl: 'app/agenda/agendaView.html',
    controller: 'AgendaController',
    controllerAs: 'agenda',
  }).
  state('root.course', {
    url: '/:id/:course',
    templateUrl: 'app/course/courseView.html',
    controller: 'CourseController',
    controllerAs: 'course'
  })
  ;

  
  $mdThemingProvider.theme('IUT')
    .primaryPalette('teal')
    .accentPalette('green');

});

