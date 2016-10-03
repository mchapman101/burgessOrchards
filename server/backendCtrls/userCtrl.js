var Massive = require('massive');
var db = Massive.connectSync({
    db: 'burgessorchards'
});

// EXPORT METHODS
// ============================================================
module.exports = {

  ReadMe: function(req, res, next){
    if (!req.user) return res.status(401).send('Current User Not Defined!');
    db.users.findOne({id: req.params.id}, function(err, result){
      if (err) {
        res.status(500).send(err);
      } else {
        req.user.password = null;
        return res.status(200).json(req.user);
      }
    });
  },


};
