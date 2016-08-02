// INITILIZE DIRECTIVE
// ============================================================
angular.module("burgessOrchards").directive('navTabs', function() {
  return {
    restrict: 'EA',
    templateUrl: '/app/shared/navTabs/navTabsTmpl.html',
    controller: 'navTabsCtrl'
  };
});
