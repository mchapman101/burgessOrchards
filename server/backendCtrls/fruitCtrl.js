var Massive = require('massive');
var db = Massive.connectSync({
    db: 'burgessorchards'
});

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
        db.create_fruit(req.body.img, req.body.type, req.body.name, req.body.description, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },
    update: function(req, res) {
        db.fruit.update({
            id: req.params.id,
            img: req.body.img,
            type: req.body.type,
            name: req.body.name,
            description: req.body.description
        }, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },
    delete: function(req, res) {
        db.fruit.destroy({
            id: req.params.id
        }, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    }

    // OTHER METHODS
    // ============================================================


};