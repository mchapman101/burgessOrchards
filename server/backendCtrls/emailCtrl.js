// Send and Email from the main page Contact Form
var Massive = require('massive');
var db = Massive.connectSync({
    db: 'burgessorchards'
});

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var config = require('../config.js');
var contactEmail = [];

module.exports = {

    sendEmail: function(req, res, err) {
        var data = req.body;
        transporter.sendMail({
            from: data.contactEmail,
            to: config.cfClientEmail,
            subject: "Message from " + data.contactName,
            text: data.contactMsg
        });
        if (err) {
            res.status(500).json(err);
        }
        res.status(200).json(res);
    },

    sendBulkEmail: function(req, res, err) {
        var data = req.body;
        console.log("req.body Logging", req.body);
        db.get_contact_email(function(err, result) {
          console.log(result, "RESULDFJSDF!");
          for (var i = 0; i < result.length; i++) {
            contactEmail.push(result[i].email);
          }
          console.log(contactEmail, "Contact emails?");
        });

      transporter.sendMail({
          from: "Burgess Orchards",
          to: contactEmail,
          subject: "A Message from Burgess Orchards!",
          text: data.msg
      });
      if (err) {
          res.status(500).json(err);
      }
        res.status(200).json(res);
    }
};
