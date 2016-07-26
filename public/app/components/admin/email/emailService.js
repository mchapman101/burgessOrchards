// INITILIZE SERVICE
// ============================================================
angular.module("burgessOrchards").service("emailService", function($http) {

var dummyData = [
  {
    firstName: "John",
    lastName: "Smith",
    email: "jsmith@aolol.com"
  },
  {
    firstName: "Suzie",
    lastName: "Jenkins",
    email: "suziejenkins112@gooogle.com"
  },
  {
    firstName: "Javier",
    lastName: "Bavier",
    email: "soLoco@cnnbc.com"
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    email: "bs@bs.com"
  },
]

this.dummyData = function(){
  return dummyData
}


  // CRUD FUNCTIONS
  // ============================================================
  this.getEmail = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/email' + query
    }).then(function(response) {
      if (response.data.length < 2) return response.data[0];
      return response.data;
    });
  };
  this.createEmail = function(email) {
    return $http({
      method: 'POST',
      url: '/email',
      data: email
    }).then(function(response) {
      return response;
    });
  };
  this.editEmail = function(id, email) {
    return $http({
      method: 'PUT',
      url: "/email/" + id,
      data: email
    }).then(function(response) {
      return response;
    });
  };
  this.deleteEmail = function(id) {
    return $http({
      method: 'DELETE',
      url: '/email/' + id
    }).then(function(response) {
      return response;
    });
  };

  // OTHER FUNCTIONS
  // ============================================================


});
