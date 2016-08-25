// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("emailModalCtrl", function($scope) {

  // VARIABLES
  // ============================================================

  var $ctrl = this;

  // FUNCTIONS
  // ============================================================

    // $ctrl.items = items;
    // $ctrl.selected = {
    //   item: $ctrl.items[0]
    // };

    $ctrl.ok = function () {
      $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
