// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("emailCtrl", function($scope, emailService) {

  // VARIABLES
  // ============================================================

$scope.getEmails = function(){
  emailService.getContacts().then(function(response){
    $scope.emails = response;
  });
};

$scope.getEmails();


  // FUNCTIONS
  // ============================================================



});
