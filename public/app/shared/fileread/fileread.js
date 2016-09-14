// INITILIZE DIRECTIVE
// ============================================================
angular.module("burgessOrchards")

.directive('fileread', function(imagesService) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind("change", function(changeEvent) {
                var reader = new FileReader();
                scope.fruit = {};

                reader.onloadend = function(loadEvent) {
                    // debugger;
                    var fileread = loadEvent.target.result;
                    // console.warn(fileread);
                    // console.log("context hit", elem[0]);
                    var tempArray = elem[0].value.split('\\');
                    var fileName = tempArray[tempArray.length - 1];

                    imagesService.storeImage(fileread, fileName)
                        .then(function(result) {
                            console.log("result hit", result);
                            scope.fruit.img = result.data.Location;
                            scope.images.unshift(result.data);
                        })
                        .catch(function(err) {
                            console.error(err);
                        });
                };

                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    };
})

.controller('fileReadCtrl', function($scope) {
    $scope.images = [];
});