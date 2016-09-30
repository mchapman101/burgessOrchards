var Massive = require('massive');
var db = Massive.connectSync({
    db: 'burgessorchards'
});

// EXPORT METHODS
// ============================================================
module.exports = {

  login: function(){

  },

  me: function(req, res, next){
    if (!req.user) return res.status(401).send('Current User Not Defined!');
    req.user.password = null;
    return res.status(200).json(req.user);
  },


};
