// INITILIZE SERVICE
// ============================================================
angular.module("burgessOrchards").service("productsService", function($http) {


var dummyFruit = [
  {
    type: "peach",
    name: "Zee Lady",
    desc: "A new hybrid freestone peach with dark red color on the skin and around the pit . Excellent, richly flavored flesh when fully ripe. Great fresh eating peach and freezing peach. Very little peach fuzz. Freestone peach."
  },
  {
    type: "peach",
    name: "Suncrest",
    desc: "The peach has a bright-red blush over its yellow skin and is fragrant and juicy. A large, freestone peach."
  },
  {
    type: "peach",
    name: "Roza",
    desc: "Developed in Washington state, this peach is sweet with a balanced tanginess. While it is named for the Roza district in Washington, the Spanish word “rosa” describes its color, a beautiful red hue to go with its juicy, succulent flavor. This is one of the first true freestone peaches of the season. Roza ripens in mid-August."
  },
  {
    type: "apple",
    name: "Gala",
    desc: "Pinkish-orange stripes over a yellow background for this crisp, sweet apple. Snacking and salads are primary uses. Gala harvest begins in the middle of August and lasts until November in cold storage."
  },
  {
    type: "apple",
    name: "Honeycrisp",
    desc: "Developed by the University of Minnesota, a sweet yet slightly tart flavor, this variety of apple is great for salads, baking, cooking or eating as a snack. The Honeycrisp Apple grows well in Alpine. It is a variety that stores well. Honeycrisp is in high demand from out customers."
  },

]

this.dummyData = function(){
  return dummyFruit
}


  // CRUD FUNCTIONS
  // ============================================================
  this.getFruit = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/fruit' + query
    }).then(function(response) {
      if (response.data.length < 2) return response.data[0];
      return response.data;
    });
  };
  this.createFruit = function(fruit) {
    return $http({
      method: 'POST',
      url: '/fruit',
      data: fruit
    }).then(function(response) {
      return response;
    });
  };
  this.editFruit = function(id, fruit) {
    return $http({
      method: 'PUT',
      url: "/fruit/" + id,
      data: fruit
    }).then(function(response) {
      return response;
    });
  };
  this.deleteFruit = function(id) {
    return $http({
      method: 'DELETE',
      url: '/fruit/' + id
    }).then(function(response) {
      return response;
    });
  };

  // OTHER FUNCTIONS
  // ============================================================


});
