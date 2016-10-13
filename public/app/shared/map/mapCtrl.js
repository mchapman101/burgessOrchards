// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("mapCtrl", function($scope) {

    // VARIABLES
    // ============================================================

    var myCenter = new google.maps.LatLng(40.4437133, -111.7839011);
    var markers = [];
    // FUNCTIONS
    // ============================================================

    var mapOptions = {
        zoom: 14,
        center: myCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable: true,
        scrollwheel: false,
        styles: [{
            "featureType": "landscape",
            "stylers": [{
                    "color": "#DCEDC8"
                }, {
                    "weight": 0.1
                }
                // { "saturation": -47 },
                // { "lightness": 73 }
            ]
        }]
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        map: $scope.map,
        position: myCenter,
        title: "Burgess Orchards",
        content: "Burgess Orchards"
    });

    var infowindow = new google.maps.InfoWindow({
      content: "<div>"+
      "<img src='assets/img/burgess_orchards_logo-01.png' class='img-responsive center-block logo-sm '></img>"+
    "<h5><span class='glyphicon glyphicon-map-marker'></span> 645 S. Alpine Hwy Alpine, UT 84004 </h5>"+
      "</div>",
      maxWidth: 250

    });

  infowindow.open(map, marker);


    marker.addListener('click', function(){
      infowindow.open(map, marker);
    });



});
