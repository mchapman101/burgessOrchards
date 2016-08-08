var Massive = require('massive');
var db = Massive.connectSync({db : 'burgessorchards'});

// EXPORT METHODS
// ============================================================
module.exports = {

  // CRUD METHODS
  // ============================================================
  read: function(req, res) {
    db.get_all_fruit(function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },
  peach: function(req, res) {
    db.get_all_peaches(function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },
  apple: function(req, res) {
    db.get_all_apples(function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },
  create: function(req, res) {
    Fruit.create(req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },
  update: function(req, res) {
    Fruit.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },
  delete: function(req, res) {
    Fruit.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  }

  // OTHER METHODS
  // ============================================================


};
