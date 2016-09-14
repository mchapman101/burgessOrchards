// INITILIZE DIRECTIVE
// ============================================================
angular.module("burgessOrchards")

.directive('fileupdate', function(imagesService) {
    return {
        restrict: 'A',
        scope: {
            fruit: "="
        },
        link: function(scope, elem, attrs) {
            scope.selectedFruit = {};
            scope.selectFruit = function(fruit) {
                console.log("Log the Selected Fruit", fruit);
                scope.selectedFruit = fruit;
            };
            console.log(scope.fruit);

            // console.log("Setting Up Fruit", scope.fruit, elem);
            elem.bind("change", function(fruit, changeEvent) {
                var reader = new FileReader();
                // This grabs the image and converts it to base64
                console.log("log the fruit", fruit);
                console.log(changeEvent);
                // scope.fruit = {};
                reader.onloadend = function(loadEvent) {
                    // Fires the function at the end of the image loading
                    console.log("onloaded", fruit);
                    console.log(arguments);
                    // debugger;
                    var fileread = loadEvent.target.result;
                    // console.warn(fileread);rs
                    var tempArray = elem[0].value.split('\\');
                    var fileName = tempArray[tempArray.length - 1];
                    // This grabs the base64 hash, then breaks it apart to grab and save the name of the image

                    imagesService.storeImage(fileread, fileName)
                        // This fires off the functions to make the calls to Amazon S3

                    .then(function(result) {
                            console.log("result from AMAZON", result);
                            console.log("THIS IS THE FRUIT", fruit.img);
                            fruit.img = result.data.Location;
                            console.log("FINAL SELECTED FRUIT CALL", scope.selectedFruit);
                        })
                        .catch(function(err) {
                            console.error(err);
                        });
                }
                // reader.onloadend=reader.onloadend.bind(null, fruit);

                reader.readAsDataURL(changeEvent.target.files[0]);
            }.bind(null,scope.fruit)
          );
        }
    };
})

.controller('fileReadCtrl', function($scope) {
    $scope.images = [];
});
