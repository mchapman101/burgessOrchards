// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("contactCtrl", function($scope, contactService, emailService, $uibModal, $log, appAlert) {

  // VARIABLES
  // ============================================================

  $scope.animationsEnabled = true;


  // FUNCTIONS
  // ============================================================

$scope.getEmails = function(){
  contactService.getContacts().then(function(response){
    $scope.emails = response;
  });
};

$scope.getEmails();


$scope.updateContact = function(contact){
  contactService.updateContact(contact.id, contact).then(function(response){
    $scope.getEmails();
  });
};

$scope.updateAlert = function(type, msg, timeout){
  var typeStr = type.toString();
  appAlert.add(typeStr, msg, timeout);
};


$scope.deleteContact = function(contact){
  console.log("delete me!", contact);
  contactService.deleteContact(contact.id, contact).then(function(response){
    $scope.getEmails();
  });
};

$scope.openBulkModal = function(size) {

  var modalInstance = $uibModal.open({
    animation: $scope.animationsEnabled,
    templateUrl: '/app/components/admin/contactList/emailModalTmpl.html',
    controller: 'emailModalCtrl',
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
