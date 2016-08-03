// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
// var db = massive.comnnectSync({db :})

// CONTROLLERS
// ============================================================
// var modelCtrl = require('./backendCtrl/modelCtrl');

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
// app.get('/model', modelCtrl.read);
// app.post('/model', modelCtrl.create);
// app.put('/model/:id', modelCtrl.update);
// app.delete('/model/:id', modelCtrl.delete);

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
