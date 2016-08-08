// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("applesCtrl", function($scope, fruitService) {

  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

  $scope.getAllApples = function(){
    fruitService.getAllApples().then(function(response){
      console.log(response, "hit1");
      $scope.fruits = response.data;
    });
  };

  $scope.getAllApples();


});
