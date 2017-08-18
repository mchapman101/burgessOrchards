// Send and Email from the main page Contact Form
const app = require('../../server.js');
var db = app.get('db');

var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
// var config = require('../config.js');

var transporter = nodemailer.createTransport();


module.exports = {

    sendEmail: function(req, res, err) {
      console.log("HIT 005");
        var data = req.body;
        transporter.sendMail({
            from: data.contactEmail,
            to: process.env.cfClientEmail,
            subject: "Message from " + data.contactName,
            text: data.contactMsg
        }, function(error, info){
          if(error) {
            return console.log(error);
          }
          console.log('Message sent: ' + info);
          res.status(200).send("Sent");
        });

    },

    sendBulkEmail: function(req, res, err) {
        var data = req.body;
        var contactEmail = [];
        db.get_contact_email(function(err, result) {
            for (var i = 0; i < result.length; i++) {
                contactEmail.push(result[i].email);
            }
            console.log("Logging this!", contactEmail);
            transporter.sendMail({
                from: "burgess@burgessorchards.com",
                to: contactEmail,
                subject: "A Message from Burgess Orchards!",
                text: data.msg
            }, function(error, info){
              if(error) {
                return console.log(error);
              }
              console.log('Message sent: ' + info.response);
            });
            if (err) {
                return res.status(500).send(err);
            }
            console.log("Log this at last", contactEmail, data.msg);
            res.status(200).send("Sent");

        });

        console.log("Logging all the Emails!", contactEmail);

    }
};
