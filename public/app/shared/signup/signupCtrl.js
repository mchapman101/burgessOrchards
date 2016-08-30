// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("signupCtrl", function($scope, emailService, $uibModalInstance) {

  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

$scope.submitContact = function(contact){
  emailService.createEmail(contact).then(function(response){
    $scope.contact = "";
    $uibModalInstance.dismiss();
  });
};

});
