// INITILIZE SERVICE
// ============================================================
angular.module("burgessOrchards").service("emailService", function($http) {

  // CRUD FUNCTIONS
  // ============================================================
  this.getContacts = function(id) {
    return $http({
      method: 'GET',
      url: '/contacts'
    }).then(function(response) {
      return response.data;
    });
  };
  this.createEmail = function(email) {
    return $http({
      method: 'POST',
      url: '/contacts',
      data: email
    }).then(function(response) {
      return response;
    });
  };
  this.updateContact = function(id, email) {
    return $http({
      method: 'PUT',
      url: "/contacts/" + id,
      data: email
    }).then(function(response) {
      return response;
    });
  };
  this.deleteContact = function(id) {
    return $http({
      method: 'DELETE',
      url: '/contacts/' + id
    }).then(function(response) {
      return response;
    });
  };

  // OTHER FUNCTIONS
  // ============================================================


});
