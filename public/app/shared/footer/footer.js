angular.module("burgessOrchards").directive('footer', function() {
  return {
    restrict: 'EA',
    templateUrl: 'public/app/shared/footer/footerTmpl.html',
    controller: "footerCtrl"
  };
});
