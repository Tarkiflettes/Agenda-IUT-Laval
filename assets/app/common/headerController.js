var HeaderController = agendaIUTLaval.controller("HeaderController", function($scope) {

  var vm = this;

  var originatorEv;
  
  vm.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

  vm.menuItemClick = function(index) {
    $mdDialog.show(
        $mdDialog.alert()
        .title('TutorialsPoint.com')
        .textContent('Menu Item clicked, index: ' + index)
        .ok('OK')
        .targetEvent(originatorEv)
        );
    originatorEv = null;
  };

});
