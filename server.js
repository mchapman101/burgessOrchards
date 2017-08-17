// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var session = require('express-session');
var config = require('./server/config');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres@localhost/burgess'
var massiveInstance = massive.connectSync({connectionString: connectionString});

// INITILIZE POLICIES
// ============================================================
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

// INITILIZE APP
// ============================================================
const app = module.exports = express();

// INITILIZE DEPENDENCIES
// ============================================================
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.set('db', massiveInstance);
var db = app.get('db')

app.use(express.static(__dirname+'/public'));

app.use(session({
  secret: config.passportSecret,
  saveUninitialized: false,
  resave:false
}));

// INITILIZE SERVICES
// ============================================================
var passport = require('./server/middleware/passport');

app.use(passport.initialize());
app.use(passport.session());

// CONTROLLERS
// ============================================================
var fruitCtrl = require('./server/backendCtrls/fruitCtrl');
var contactsCtrl = require('./server/backendCtrls/contactsCtrl');
var imageCtrl = require('./server/backendCtrls/imageCtrl');
var userCtrl = require('./server/backendCtrls/userCtrl');
var emailCtrl = require('./server/backendCtrls/emailCtrl');
var loginCtrl = require('./server/backendCtrls/loginCtrl');

// ISADMIN ENDPOINT
app.get('/isLoggedIn', loginCtrl.validateLogin);
// ============================================================

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

// IMAGES ENDPOINTS
// ============================================================
app.post('/newimage', imageCtrl.saveImage);

// LOGIN ENDPOINTS
// ============================================================
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/me', isAuthed, userCtrl.ReadMe);

// EMAILING ENDPOINTS
// ============================================================
app.post('/contact-form', emailCtrl.sendEmail);
app.post('/bulk-email', emailCtrl.sendBulkEmail);

// VARIABLES
// ============================================================
var port = 3000;

// LISTEN
// ============================================================
app.listen(port, function() {
  console.log('listening on port ', port);
});
