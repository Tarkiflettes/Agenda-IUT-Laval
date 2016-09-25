var SidenavController = agendaIUTLaval.controller("SidenavController", function($scope, $http) {

  var vm = this;

  vm.department = [];
  vm.grade = [];

  $scope.grade = false;
  $scope.dep = true;
  $scope.cla = [];

  $http.get("/api/agenda/", {params:{"type": 0}})
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
    if($scope.grade) {
      $http.get("/api/agenda?type=1&type=2", {params: {"department": id, "limit": 1000}})
        .success(function(data){

          vm.grade = data;

        });
    }
  }

});
