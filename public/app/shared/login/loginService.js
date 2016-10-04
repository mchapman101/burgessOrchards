// INITILIZE SERVICE
// ============================================================
angular.module("burgessOrchards").service("loginService", function($http) {


  this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function(response){
      console.log(response);
      return response;
    });
  };

});
