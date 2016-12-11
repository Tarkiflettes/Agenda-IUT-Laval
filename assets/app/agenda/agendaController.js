var AgendaController = agendaIUTLaval.controller("AgendaController", function($scope, $stateParams, $timeout, uiCalendarConfig, $rootScope, $state, $location) {

  var vm = this;
 
  $rootScope.title = "Agenda - IUT Laval";
  $rootScope.subTitle = "Agenda - IUT Laval";

  $scope.eventSource = {
    url: "/api/agenda/icalToJson?id="+$stateParams.id,
    className: 'gcal-event',           // an option!
  };

  $scope.eventSources = $scope.eventSource;
 
  var defaultView = 'agendaWeek';

  if (typeof $stateParams.view !== "undefined") {
    defaultView = $stateParams.view; 
  }

  var defaultDate = moment().valueOf();

  if (typeof $stateParams.date !== "undefined") {
    if ($stateParams.date != 'current')
      defaultDate = $stateParams.date;
  }

  $scope.uiConfig = {
    calendar:{
      height: $(window).height()
        -document.getElementById('header').offsetHeight
        -document.getElementById('control').offsetHeight,
      editable: false,
      lang: 'fr',
      allDaySlot: false,
      defaultView: defaultView,
      defaultDate: defaultDate,
      header: false,
      weekends: false,
      scrollTime:  "08:00:00",
      minTime: "07:00:00",
      maxTime: "21:00:00",
      eventClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize
    }
  };

  $timeout(function () {
    $scope.uiConfig.calendar.height = $(window).height()
      -document.getElementById('header').offsetHeight
      -document.getElementById('control').offsetHeight; 
  }, 100);
  window.onresize = function(event) {
    $scope.uiConfig.calendar.height = $(window).height()
      -document.getElementById('header').offsetHeight
      -document.getElementById('control').offsetHeight;
  };

  $scope.next = function() { 
    uiCalendarConfig.calendars.myCalendar.fullCalendar('next');
    var viewName = uiCalendarConfig.calendars.myCalendar.fullCalendar('getView').name;
    var date = uiCalendarConfig.calendars.myCalendar.fullCalendar('getDate').format();
    $state.go('root.agenda', {date: date}, {notify: false});
  }

  $scope.prev = function() {
    uiCalendarConfig.calendars.myCalendar.fullCalendar('prev');
    var viewName = uiCalendarConfig.calendars.myCalendar.fullCalendar('getView').name;
    var date = uiCalendarConfig.calendars.myCalendar.fullCalendar('getDate').format();
    $state.go('root.agenda', {date: date}, {notify: false});
  }

  $scope.changeView = function(viewName) {
    $state.go('root.agenda', {view: viewName});
  }

  $scope.today = function() {
    uiCalendarConfig.calendars.myCalendar.fullCalendar('today');
    $state.go('root.agenda', {date: 'current'}, {notify: false});
  }

})
