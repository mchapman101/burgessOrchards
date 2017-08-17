CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text,
    password text
);

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT
);

INSERT INTO contacts (id, first_name, last_name, email) VALUES (1, 'Bob', 'Smith', 'bsmith121@yahoooo.com');
INSERT INTO contacts (id, first_name, last_name, email) VALUES (2, 'Sally', 'Rally', 'sallyrallydally@gmale.com');
INSERT INTO contacts (id, first_name, last_name, email) VALUES (3, 'Dude', 'LikeNoWay', 'woah@woah.com');

CREATE TABLE fruit (
  id SERIAL PRIMARY KEY,
  img TEXT,
  type TEXT,
  name TEXT,
  description TEXT
);

INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards/clark%40burgessOrchards.com%2F_DSC2620.jpg',	'peach',	'Angelus', 'A yellow-flesh, freestone with a low acid flavor. It is more of a yellow peach with a slight red blush, and is a bit elongated. Its outstanding flavor makes it a highly sought after variety by true peach connoisseurs. Freestone peach....stufff');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'peach',	'Diamond Princess!!', 'Very red in color. sweet and firm with a smooth texture, excellent fresh eating peach. Freestone peach....');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png', 'peach', 'Early Elberta', 'Large golden yellow peach with very little or no blush. Golden yellow flesh with rich, sweet flavor. Excellent for fresh eating and canning. The most popular variety in our area. Early Elberta is one of the best canning peaches on the market. Freestone peach.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'peach', 'Roza!!!', 'Developed in Washington state, this peach is sweet with a balanced tanginess. While it is named for the Roza district in Washington, the Spanish word “rosa” describes its color, a beautiful red hue to go with its juicy, succulent flavor. This is one of the first true freestone peaches of the season. Roza ripens in mid-August.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'peach', 'Summer Lady',	'Freestone newer variety developed recently that is a cross between the Elegant Lady and the O’ Henry peaches. Great for Fresh eating or canning.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'peach', 'Suncrest', 'The peach has a bright-red blush over its yellow skin and is fragrant and juicy. A large, freestone peach.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'peach', 'Zee Lady', 'A new hybrid freestone peach with dark red color on the skin and around the pit . Excellent, richly flavored flesh when fully ripe. Great fresh eating peach and freezing peach. Very little peach fuzz. Freestone peach.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'apple', 'Fuji', 'This flavorful variety was introduced to the U.S. from Japan in the 1980s, but now the U.S. produces more Fujis than Japan. It''s excellent for baking and salads. Utah''s cool weather in the late fall helps develop its reddish-pink color and excellent flavor. Fujis are harvested in October and can be purchased October to December.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'apple', 'Gala', 'Pinkish-orange stripes over a yellow background for this crisp, sweet apple. Snacking and salads are primary uses. Gala harvest begins in the middle of August and lasts until November in cold storage.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'apple', 'Honeycrisp', 'Developed by the University of Minnesota, a sweet yet slightly tart flavor, this variety of apple is great for salads, baking, cooking or eating as a snack. The Honeycrisp Apple grows well in Alpine. It is a variety that stores well. Honeycrisp is in high demand from out customers.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'apple', 'Jonagold', 'A cross between a Jonathon and a Golden Delicious apple is great for eating, baking and cooking.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'peach', 'O''Henry', 'Freestone, Bright Colored, large peach with light fuzz. the flesh is yellow, streaked with red. Very firm flesh with high sugar content. Great canning and fresh eating peach.');
INSERT INTO fruit (img, type, name, description) VALUES ('https://s3-us-west-2.amazonaws.com/burgessorchards%2Fclark%40burgessOrchards.com/uploadicon.png',	'peach', 'Red Haven',	'First peach of the season on our farm. Depending on the season usually comes on around the first part of August. Medium sized round fruit. Golden-yellow skin with attractive red blush. Sweet yellow flesh is firm and smooth textured. Excellent for canning, freezing, and fresh eating. Redhaven is the standard by which all early peaches are judged. Semi-freestone peach');
