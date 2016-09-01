var Massive = require('massive');
var db = Massive.connectSync({
    db: 'burgessorchards'
});

var AWS = require('aws-sdk');
var Keys = require('../config.js');

  AWS.config.update({
    accessKeyId: Keys.AWSAccessKeyId,
    secretAccessKey: Keys.AWSSecretKey,
    region: Keys.amazonRegion
  });

  var s3 = new AWS.S3();
  var exports = module.exports = {};
  exports.saveImage = function (req, res) {
    //TODO: Send request and get response from Amazon
  };

  exports.saveImage = function (req, res) {
    buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

    // bucketName var below crates a "folder" for each user
    var bucketName = 'myApp/' + req.body.userEmail;
    var params = {
      Bucket: bucketName,
      Key: req.body.imageName,
      Body: buf,
      ContentType: 'image/' + req.body.imageExtension,
      ACL: 'public-read'
    };
    s3.upload(params, function (err, data) {
      if (err) return res.status(500).send(err);

      // TODO: save data to mongo
      req.json(data);
    });
  }
