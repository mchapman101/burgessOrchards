var Massive = require('massive');
var db = Massive.connectSync({
    db: 'burgessorchards'
});

module.exports = {

    read: function(req, res) {
        db.get_all_contacts(function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    create: function(req, res) {
        db.create_contact(req.body.firstname, req.body.lastname, req.body.email, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    update: function(req, res) {
        db.contacts.update({
            id: req.params.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        }, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },
    delete: function(req, res) {
        db.contacts.destroy({
            id: req.params.id
        }, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    }

};