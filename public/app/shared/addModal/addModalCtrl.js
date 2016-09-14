// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("addModalCtrl", function($scope, $state, fruitService, $uibModalInstance) {

  // VARIABLES
  // ============================================================
$scope.images = [];
  // FUNCTIONS
  // ============================================================


$scope.addFruit = function(fruit) {
  fruitService.addFruit(fruit).then(function(response) {
    $scope.fruit = "";
    fruitService.getAllFruit();
    $state.go($state.current, {}, {reload: true});
    $uibModalInstance.dismiss();
  });
};

});
