// INITILIZE DIRECTIVE
// ============================================================
angular.module("burgessOrchards")

.directive('fileupdate', function (imagesService) {
  return {
    restrict: 'A',
    scope: {
    fruit: "="
  },
    link: function (scope, elem, attrs) {
      // attrs.$observe('fruit', function(value){
      //   console.log("observer hit", value);
      // });

      // console.log("Setting Up Fruit", scope.fruit, elem);
      elem.bind("change", function (changeEvent) {
        var reader = new FileReader();
        // This grabs the image and converts it to base64
        console.log("log the fruit", scope.fruit);
        // scope.fruit = {};
        console.log("scope", scope);
        console.log("changeEvent", changeEvent);
        reader.onloadend = function (loadEvent) {
          // Fires the function at the end of the image loading

          // debugger;
          var fileread = loadEvent.target.result;
          // console.warn(fileread);rs
          var tempArray = elem[0].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];
          // This grabs the base64 hash, then breaks it apart to grab and save the name of the image

          imagesService.storeImage(fileread, fileName)
          // This fires off the functions to make the calls to Amazon S3

          .then(function (result) {
            console.log("result from AMAZON", result);
            console.log("THIS IS THE FRUIT", scope.fruit);
            scope.fruit.img = result.data.Location;
          })
          .catch(function (err) {
            console.error(err);
          });
        };

        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  };
})

.controller('fileReadCtrl', function ($scope){
  $scope.images = [];
});
