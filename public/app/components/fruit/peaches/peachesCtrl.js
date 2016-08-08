// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("peachesCtrl", function($scope, fruitService) {

  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

$scope.getAllPeaches = function(){
  fruitService.getAllPeaches().then(function(response){
    console.log(response, "hit1");
    $scope.fruits = response.data;
  });
};

$scope.getAllPeaches();

});
