module.exports = {
  validateLogin: function(req, res) {
    if(req.user) res.json('AUTHORIZED');
    else res.json(null);
  }
}
