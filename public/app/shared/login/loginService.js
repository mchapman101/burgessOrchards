// INITILIZE SERVICE
// ============================================================
angular.module("burgessOrchards").service("loginService", function($http) {


  this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/users/login',
      date: user
    }).then(function(response){
      return response;
    });
  };

});
