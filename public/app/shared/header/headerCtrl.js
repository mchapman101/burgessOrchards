// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("headerCtrl", function($scope, $uibModal, $log, appAlert) {

    $scope.animationsEnabled = true;

    $scope.openSignup = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/app/shared/signup/signupTmpl.html',
        controller: 'signupCtrl',
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
