angular.module('burgessOrchards')
    .factory('imagesService', function($http) {
        var service = {};

        service.storeImage = function(imageData, fileName) {
            var imageExtension = imageData.split(';')[0].split('/');
            imageExtension = imageExtension[imageExtension.length - 1];

            var newImage = {
                imageName: fileName,
                imageBody: imageData,
                imageExtension: imageExtension,
                userEmail: 'clark@burgessOrchards.com'
            };
            // console.log("Service New Image Hit", newImage);
            return $http({
                method: 'POST',
                url: '/newimage',
                data: newImage
            });
        };
        return service;
    });