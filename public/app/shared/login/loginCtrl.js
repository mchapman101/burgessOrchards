// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("loginCtrl", function($scope, $state, loginService) {

  // VARIABLES
  // ============================================================

  $scope.login = function(loginInfo) {
    loginService.login(loginInfo).then(function(response){
      $state.go('admin');
    });

  };

  // FUNCTIONS
  // ============================================================


});
