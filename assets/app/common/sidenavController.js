var SidenavController = agendaIUTLaval.controller("SidenavController", function($scope, $http) {

  var vm = this;
 
  vm.department = [];
  vm.grade = [];

  $scope.grade = false;
  $scope.dep = true;

  $http.get("/api/agenda/", {params:{"type": 0}})
    .success(function(data){
    vm.department = data;
  });

  $scope.changeMenu = function (){
    $scope.dep = !$scope.dep;
    $scope.grade = !$scope.grade;
  }

});
