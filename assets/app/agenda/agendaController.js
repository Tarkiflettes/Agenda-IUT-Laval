var AgendaController = agendaIUTLaval.controller("AgendaController", function($scope, $stateParams, $timeout, uiCalendarConfig, $rootScope, $state) {

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

  $scope.uiConfig = {
    calendar:{
      height: $(window).height()
        -document.getElementById('header').offsetHeight
        -document.getElementById('control').offsetHeight,
      //contentHeight: "auto",
      //aspectRatio: 2,
      editable: false,
      lang: 'fr',
      allDaySlot: false,
      defaultView: defaultView,
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
    console.log(uiCalendarConfig.calendars.myCalendar);
    uiCalendarConfig.calendars.myCalendar.fullCalendar('next');
  }

  $scope.prev = function() {
    uiCalendarConfig.calendars.myCalendar.fullCalendar('prev');
  }

  $scope.changeView = function(viewName) {
    $state.go('root.agenda', {id: 3113, view: viewName});
    uiCalendarConfig.calendars.myCalendar.fullCalendar('changeView', viewName); 
  }

  $scope.today = function() {
    uiCalendarConfig.calendars.myCalendar.fullCalendar('today');
  }

})
