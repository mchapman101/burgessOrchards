// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("mapCtrl", function($scope) {

  // VARIABLES
  // ============================================================

var myCenter = new google.maps.LatLng(40.4437133,-111.7839011);
var markers= [];
  // FUNCTIONS
  // ============================================================

  var mapOptions = {
          zoom: 14,
          center: myCenter,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          draggable: false,
          scrollwheel: false,
      }

      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      var marker = new google.maps.Marker({
        map: $scope.map,
        position: myCenter,
        title: "Burgess Orchards",
        content: "Burgess Orchards"
      });



  });
