var AgendaController = agendaIUTLaval.controller("AgendaController", function($scope, $stateParams, $timeout, uiCalendarConfig) {

  var vm = this;

  $scope.eventSource = {
    url: "http://192.168.1.132:1337/api/agenda/icalToJson?id="+$stateParams.id,
    className: 'gcal-event',           // an option!
  };

  $scope.eventSources = $scope.eventSource;

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
      defaultView: 'agendaWeek',
      header: false,
      weekends: false,
      scrollTime :  "08:00:00", 
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
    uiCalendarConfig.calendars.myCalendar.fullCalendar('changeView', viewName); 
  }

})
