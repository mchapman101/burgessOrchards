// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var db = massive.connectSync({db : 'burgessorchards'})

// CONTROLLERS
// ============================================================
var fruitCtrl = require('./backendCtrls/fruitCtrl');


// INITILIZE APP
// ============================================================
var app = express();

// INITILIZE DEPENDENCIES
// ============================================================
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname+'./../public'));


// ENDPOINTS
// ============================================================
// MODEL ENDPOINTS
app.get('/fruit', function(req, res) {
  db.get_all_fruit(function(err, fruit){
  res.send(fruit);
  })
});



// app.get('/fruit', fruitCtrl.read);
// app.post('/fruit', fruitCtrl.create);
// app.put('/fruit/:id', fruitCtrl.update);
// app.delete('/fruit/:id', fruitCtrl.delete);

// VARIABLES
// ============================================================
var port = 4000;

// MONGO CONNECTION
// ============================================================

// LISTEN
// ============================================================
app.listen(port, function() {
  console.log('listening on port ', port);
});
