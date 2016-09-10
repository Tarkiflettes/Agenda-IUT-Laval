var SidenavController = agendaIUTLaval.controller("SidenavController", function($scope, $http) {

  var vm = this;

  $scope.events = [];
  $http.get("/api/agenda/?limit=10").success(function(data){
    vm.events = data;
    console.log(vm.events);
  });

});
