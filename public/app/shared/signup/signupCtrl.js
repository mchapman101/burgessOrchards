// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("signupCtrl", function($scope, contactService, $uibModalInstance) {

  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

$scope.submitContact = function(contact){
  contactService.createEmail(contact).then(function(response){
    $scope.contact = "";
    $uibModalInstance.dismiss();
  });
};

$scope.cancelSignup = function(){
  $uibModalInstance.dismiss();
};

});
