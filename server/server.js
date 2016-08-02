// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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
var mongoURI = 'mongodb://localhost:27017/DBName';

// MONGO CONNECTION
// ============================================================
mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to mongo at: ', mongoURI);
});

// LISTEN
// ============================================================
app.listen(port, function() {
  console.log('listening on port ', port);
});
