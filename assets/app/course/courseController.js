var CourseController = agendaIUTLaval.controller("CourseController", function($scope, $rootScope, $http, $stateParams) {
  
  var vm = this;

  $rootScope.title = "Cours - Agenda - IUT Laval";
  $rootScope.subTitle = "Cours";

  vm.course = {};
  vm.id = $stateParams.id;

  $http.get("/api/agenda/course/", {params:{"id": $stateParams.id, "idcours": $stateParams.course}})
    .success(function(data){
    vm.course = data;
    $rootScope.title = vm.course.title+"- Agenda - IUT Laval";
    $rootScope.subTitle = vm.course.title;
  });

  vm.goBack = function() {
    alert("koukou");
    window.history.back();
  }
})
