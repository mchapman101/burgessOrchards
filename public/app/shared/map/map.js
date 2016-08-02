// INITILIZE DIRECTIVE
// ============================================================
angular.module("burgessOrchards").directive('googleMap', function() {
  return {
    restrict: 'EA',
    templateUrl: '/app/shared/map/mapTmpl.html',
    controller: 'mapCtrl'
  };
});
