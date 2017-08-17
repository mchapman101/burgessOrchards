angular.module("burgessOrchards").service("routeSrvc", function($http) {

  this.validateLogin = function() {
    return $http({
      method:'GET',
      url: '/isLoggedIn'
    }).then(function(response) {
      return response.data;
    })
  }
  
});
