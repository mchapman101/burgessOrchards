// CONFIG
// ============================================================
angular.module("burgessOrchards").config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: 'public/app/components/home/home.html',
      controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'public/app/components/about/about.html',
      controller: 'aboutCtrl'
    })
    .state('fruit', {
      url: '/fruit',
      templateUrl: 'public/app/components/fruit/fruit.html',
      controller: 'fruitCtrl'
    })
    .state('recipies', {
      url: '/recipies',
      templateUrl: 'public/app/components/recipies/recipies.html',
      controller: 'recipiesCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'public/app/components/signup/signupTmpl.html',
      controller: 'signupCtrl'
    });





  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
