// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("loginCtrl", function($scope, $state, loginService, $uibModalInstance) {

  // VARIABLES
  // ============================================================

  $scope.login = function(loginInfo) {
    loginService.login(loginInfo).then(function(response){
      console.log(response);
      $state.go('admin');
      $uibModalInstance.dismiss();

    });

  };

  // FUNCTIONS
  // ============================================================


});
