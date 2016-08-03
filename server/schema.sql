CREATE TABLE contacts (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT
);

INSERT INTO contacts (id, first_name, last_name, email) VALUES (1, 'Bob', 'Smith', 'bsmith121@yahoooo.com');
INSERT INTO contacts (id, first_name, last_name, email) VALUES (2, 'Sally', 'Rally', 'sallyrallydally@gmale.com');
INSERT INTO contacts (id, first_name, last_name, email) VALUES (3, 'Dude', 'LikeNoWay', 'woah@woah.com');

CREATE TABLE fruit (
  id INTEGER PRIMARY KEY,
  img TEXT,
  type TEXT,
  name TEXT,
  description TEXT
);

INSERT INTO fruit (id, img, type, name, description) VALUES (1, 'peaches.img', 'peach', 'Red Haven', 'First peach of the season on our farm. Depending on the season usually comes on around the first part of August. Medium sized round fruit. Golden-yellow skin with attractive red blush. Sweet yellow flesh is firm and smooth textured. Excellent for canning, freezing, and fresh eating. Redhaven is the standard by which all early peaches are judged. Semi-freestone peach');
