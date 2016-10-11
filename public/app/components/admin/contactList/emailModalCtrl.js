// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("emailModalCtrl", function($scope, emailService, $uibModal, $uibModalInstance) {

  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

$scope.sendBulkEmail = function(email){
  emailService.sendBulkEmail(email).then(function(response){
    $scope.email = "";
    $uibModalInstance.dismiss();
  });
};

$scope.cancelEmail = function(){
  $uibModalInstance.dismiss();
};

  });
