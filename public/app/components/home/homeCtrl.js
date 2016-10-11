// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("homeCtrl", function($scope, emailService) {

  // VARIABLES
  // ============================================================

  $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
      {
        image: "../assets/img/carousel/01.jpg",
        id: "01"
      },
      {
        image: "../assets/img/carousel/02.jpg",
        id: "02"
      },
      {
        image: "../assets/img/carousel/03.jpg",
        id: "03"
      },
      {
        image: "../assets/img/carousel/04.jpg",
        id: "04"
      },
      {
        image: "../assets/img/carousel/05.jpg",
        id: "05"
      },
      {
        image: "../assets/img/carousel/06.jpg",
        id: "06"
      },
      {
        image: "../assets/img/carousel/07.jpg",
        id: "07"
      },

    ];
    var currIndex = 0;

  // FUNCTIONS
  // ============================================================

$scope.sendEmail = function(data){
  console.log(data);
  emailService.sendEmail(data).then(function(response){
    $scope.cf = "";
  });
};

});
