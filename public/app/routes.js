// CONFIG
// ============================================================
angular.module("burgessOrchards").config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when("/fruit", "/fruit/peaches");
  $urlRouterProvider.when("/admin", "/admin/contact-list");
  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: 'app/components/home/home.html',
      controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/components/about/about.html',
      controller: 'aboutCtrl'
    })
    .state('fruit', {
      url: '/fruit',
      templateUrl: 'app/components/fruit/fruit.html',
      controller: 'fruitCtrl',
      // params: {
      //   autoActivateChild: 'fruit.peaches'
      // }
    })
    //--Fruit Nested Views--//

        .state('fruit.peaches', {
          url: '/peaches',
          templateUrl: 'app/components/fruit/peaches/peaches.html',
          controller: 'peachesCtrl'
        })
        .state('fruit.apples', {
          url: '/apples',
          templateUrl: 'app/components/fruit/apples/apples.html',
          controller: 'applesCtrl'
        })
        .state('fruit.others', {
          url: '/others',
          templateUrl: 'app/components/fruit/others/others.html',
          controller: 'othersCtrl'
        })
//------End Nested Views ---//

    .state('recipies', {
      url: '/recipies',
      templateUrl: 'app/components/recipies/recipies.html',
      controller: 'recipiesCtrl'
    })

    .state('admin', {
      url: '/admin',
      templateUrl: 'app/components/admin/admin.html',
      controller: 'adminCtrl',
      resolve: {
        validate: function(routeSrvc, $location) {
          routeSrvc.validateLogin().then(function(response) {
             var isAdmin = response;
             if(!isAdmin) $location.path('/');
          });
        }
      }
    })

    //-------Admin Nested Views ------//
    .state('admin.email', {
      url: '/contact-list',
      templateUrl: 'app/components/admin/contactList/contactList.html',
      controller: 'contactCtrl'
    })
    .state('admin.products', {
      url: '/products',
      templateUrl: 'app/components/admin/products/products.html',
      controller: 'productsCtrl'
    });
    ;


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
