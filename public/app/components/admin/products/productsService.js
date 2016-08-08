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


});
