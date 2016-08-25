// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("emailCtrl", function($scope, emailService, $uibModal, $log, appAlert) {

  // VARIABLES
  // ============================================================

  $scope.animationsEnabled = true;


  // FUNCTIONS
  // ============================================================

$scope.getEmails = function(){
  emailService.getContacts().then(function(response){
    $scope.emails = response;
  });
};

$scope.getEmails();


$scope.updateContact = function(contact){
  emailService.updateContact(contact.id, contact).then(function(response){
    $scope.getEmails();
  });
};

$scope.updateAlert = function(type, msg, timeout){
  var typeStr = type.toString();
  appAlert.add(typeStr, msg, timeout);
};


$scope.deleteContact = function(contact){
  console.log("delete me!", contact);
  emailService.deleteContact(contact.id, contact).then(function(response){
    $scope.getEmails();
  });
};


});
