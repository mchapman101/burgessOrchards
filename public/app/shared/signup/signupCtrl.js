// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("signupCtrl", function($scope, emailService, $uibModalInstance) {

  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

$scope.submitContact = function(contact){
  console.log("contact hit", contact);
  emailService.createEmail(contact).then(function(response){
    console.log("response hit", response);
    $scope.contact = "";
    $uibModalInstance.dismiss();
  })
}

});
