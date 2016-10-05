// Send and Email from the main page Contact Form

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var config = require('../config.js');

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
    }
};
