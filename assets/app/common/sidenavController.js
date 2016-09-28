var SidenavController = agendaIUTLaval.controller("SidenavController", function($scope, $http) {

  var vm = this;

  vm.department = [];
  vm.grade = [];

  $scope.grade = false;
  $scope.dep = true;
  $scope.cla = [];
  $scope.currentId = 1;

  $http.get("/api/agenda/", {params: {"limit": 1000}})    
    .success(function(data){

      vm.department = data;

    });

  $scope.displayCla = function(id) {
    $scope.cla[id] = !$scope.cla[id];
    console.log($scope.cla)
  }

  $scope.changeMenu = function (id){
    $scope.dep = !$scope.dep;
    $scope.grade = !$scope.grade;
    $scope.currentId = id;
    $scope.cla = [];
  }

});
