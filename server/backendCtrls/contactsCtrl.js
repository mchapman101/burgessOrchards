const app = require('../../server.js');
var db = app.get('db');

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
      var data = req.body;
        db.create_contact(data.firstname, data.lastname, data.email, function(err, result) {
            if (err) {
              console.log(err)
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    update: function(req, res) {
        db.contacts.update({
            id: req.params.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
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
