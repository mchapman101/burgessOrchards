// INITILIZE DIRECTIVE
// ============================================================
angular.module("burgessOrchards").directive('navTabs', function() {
  return {
    restrict: 'EA',
    templateUrl: 'public/app/shared/navTabs/navTabsTmpl.html',
    controller: 'navTabsCtrl'
  };
});
