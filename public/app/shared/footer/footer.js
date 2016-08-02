angular.module("burgessOrchards").directive('footer', function() {
  return {
    restrict: 'EA',
    templateUrl: 'app/shared/footer/footerTmpl.html',
    controller: "footerCtrl"
  };
});
