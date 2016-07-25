// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("homeCtrl", function($scope) {

  // VARIABLES
  // ============================================================

  $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [
      {
        image: "assets/img/carousel/01.jpg",
        id: "01"
      },
      {
        image: "assets/img/carousel/02.jpg",
        id: "02"
      },
      {
        image: "assets/img/carousel/03.jpg",
        id: "03"
      },
      {
        image: "assets/img/carousel/04.jpg",
        id: "04"
      },
    ];
    var currIndex = 0;

    // $scope.addSlide = function() {
    //   var newWidth = 600 + slides.length + 1;
    //   slides.push({
    //     image: carouselSlides,
    //     text: [][slides.length % 4],
    //     id: currIndex++
    //   });
    // };
    //
    //
    // for (var i = 0; i < 4; i++) {
    //   $scope.addSlide();
    // }

    // Randomize logic below

    // function assignNewIndexesToSlides(indexes) {
    //   for (var i = 0, l = slides.length; i < l; i++) {
    //     slides[i].id = indexes.pop();
    //   }
    // }
    //
    // function generateIndexesArray() {
    //   var indexes = [];
    //   for (var i = 0; i < currIndex; ++i) {
    //     indexes[i] = i;
    //   }
    //   return shuffle(indexes);
    // }
    //
    // // http://stackoverflow.com/questions/962802#962890
    // function shuffle(array) {
    //   var tmp, current, top = array.length;
    //
    //   if (top) {
    //     while (--top) {
    //       current = Math.floor(Math.random() * (top + 1));
    //       tmp = array[current];
    //       array[current] = array[top];
    //       array[top] = tmp;
    //     }
    //   }
    //
    //   return array;
    // }


  // FUNCTIONS
  // ============================================================


});
