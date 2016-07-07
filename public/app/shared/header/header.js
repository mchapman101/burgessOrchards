// INITILIZE DIRECTIVE
// ============================================================
angular.module("burgessOrchards").directive('header', function() {
  return {
    restrict: 'EA',
    templateUrl: 'public/app/shared/header/headerTmpl.html',
    controller: "headerCtrl"
  };
});
