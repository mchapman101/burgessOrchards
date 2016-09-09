// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("productsCtrl", function($scope, fruitService, $uibModal, $log) {

  // VARIABLES
  // ============================================================

  $scope.animationsEnabled = true;

  // FUNCTIONS
  // ============================================================


  $scope.getAllFruit = function() {
    fruitService.getAllFruit().then(function(response){
      $scope.fruits = response.data;
    });
  };

  $scope.getAllFruit();


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

  $scope.addModal = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/app/shared/addModal/addModalTmpl.html',
      controller: 'addModalCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };


});
