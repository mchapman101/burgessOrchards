// INITILIZE SERVICE
// ============================================================
angular.module("burgessOrchards").service("emailService", function($http) {

  // CRUD FUNCTIONS
  // ============================================================
  this.sendEmail = function(data) {
    return $http({
      method: 'POST',
      url: '/contact-form',
      data: data
    }).then(function(response) {
      return response.data;
    });
  };

  this.sendBulkEmail = function(data) {
    return $http({
      method: 'POST',
      url: '/bulk-email',
      data: data
    }).then(function(response){
      return response.date;
    });
  };

  // OTHER FUNCTIONS
  // ============================================================


});
