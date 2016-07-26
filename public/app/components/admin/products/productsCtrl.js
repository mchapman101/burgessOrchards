// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("productsCtrl", function($scope, productsService) {

  // VARIABLES
  // ============================================================
  $scope.fruits = productsService.dummyData()

  // FUNCTIONS
  // ============================================================


});
