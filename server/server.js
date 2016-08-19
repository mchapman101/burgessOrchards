// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var db = massive.connectSync({db : 'burgessorchards'});

// CONTROLLERS
// ============================================================
var fruitCtrl = require('./backendCtrls/fruitCtrl');
var contactsCtrl = require('./backendCtrls/contactsCtrl');



// INITILIZE APP
// ============================================================
var app = express();

// INITILIZE DEPENDENCIES
// ============================================================
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname+'./../public'));

// FRUIT ENDPOINTS
// ============================================================
app.get('/fruit', fruitCtrl.read);
app.get('/fruit/apple', fruitCtrl.apple);
app.get('/fruit/peach', fruitCtrl.peach);
app.post('/fruit', fruitCtrl.create);
app.put('/fruit/:id', fruitCtrl.update);
app.delete('/fruit/:id', fruitCtrl.delete);

// CONTACTS ENDPOINTS
// ============================================================
app.get('/contacts', contactsCtrl.read);
app.post('/contacts', contactsCtrl.create);
app.put('/contacts/:id', contactsCtrl.update);
app.delete('/contacts/:id', contactsCtrl.delete);


// VARIABLES
// ============================================================
var port = 4000;

// LISTEN
// ============================================================
app.listen(port, function() {
  console.log('listening on port ', port);
});
