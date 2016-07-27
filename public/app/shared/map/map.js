// INITILIZE DIRECTIVE
// ============================================================
angular.module("burgessOrchards").directive('googleMap', function() {
  return {
    restrict: 'EA',
    templateUrl: 'public/app/shared/map/mapTmpl.html',
    controller: 'mapCtrl'
  };
});
