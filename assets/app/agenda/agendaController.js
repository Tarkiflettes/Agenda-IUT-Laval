var AgendaController = agendaIUTLaval.controller("AgendaController", function($scope) {

  var vm = this;

  $scope.eventSource = {
    url: "http://192.168.1.132:1337/api/agenda/icalToJson?id=2667",
    className: 'gcal-event',           // an option!
  };

  $scope.eventSources = $scope.eventSource;

  $scope.uiConfig = {
    calendar:{
      height: "100%",
      contentHeight: "auto",
      editable: false,
      lang: 'fr',
      defaultView: 'agendaWeek',
      header:{
        left: 'month agendaWeek agendaDay',
        center: 'title',
        right: 'today prev,next'
      }, 
      scrollTime :  "08:00:00", 
      eventClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize
    }
  };

})
