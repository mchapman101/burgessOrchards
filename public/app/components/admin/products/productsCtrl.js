// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("productsCtrl", function($scope, fruitService) {

  // VARIABLES
  // ============================================================
  $scope.getAllFruit = function() {
    fruitService.getAllFruit().then(function(response){
      console.log(response);
      $scope.fruits = response.data;
    });
  };

  $scope.getAllFruit();

  // FUNCTIONS
  // ============================================================

  $scope.updateProduct = function(product){
    fruitService.updateFruit(product.id, product).then(function(response){
      $scope.getAllFruit();
    });
  };

  $scope.deleteProduct = function(product){
    fruitService.deleteFruit(product.id, product).then(function(response){
      $scope.getAllFruit();
    });
  };

});
