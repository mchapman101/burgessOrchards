var Massive = require('massive');
var db = Massive.connectSync({
    db: 'burgessorchards'
});

var AWS = require('aws-sdk');
var Keys = require('../config.js');

// Hard amazon aws config
AWS.config.update({
    accessKeyId: Keys.amazonAccess,
    secretAccessKey: Keys.amazonSecret,
    region: Keys.amazonRegion
});

var s3 = new AWS.S3();

var exports = module.exports = {};


exports.saveImage = function (req, res) {
  // console.log("req hit", req);
  var buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');
  // console.log("buf hit", buf);

  // bucketName var below creates a "folder" for each user
  var bucketName = 'burgessorchards/' + req.body.userEmail;
  var params = {
      Bucket: bucketName,
      Key: req.body.imageName,
      Body: buf,
      ContentType: 'image/' + req.body.imageExtension,
      ACL: 'public-read'
  };

  s3.upload(params, function(err, data) {
      // console.log('THIS IS AN ERROR', err, 'THIS IS THE DATA', data);
      if (err) return res.status(500).send(err);
      res.status(200).json(data);
      console.log("data return hit", data); //save data to database?
    });

  };

exports.deleteImage = function (req, res) {
	var imgName = req.body.image.Location.split('/');
	imgName = imgName[imgName.length - 1];

	var params = {
	  Bucket: req.body.image.imgPath,
	  Key: imgName
	};

	s3.deleteObject(params, function(err, data) {
	  if (err) return res.status(500).send(err.stack); //(err, err.stack);

	  //Remove from user image list
	  User.findById(req.body.userId, function (err, user) {
	  	if (err) return res.status(500).send(err);

	  	user.images = user.images.filter(function (image, index) {
	  		if (image.Location === req.body.image.Location) return false;
	  		return true;
	  	})

	  	user.save(function (err, result) {
	  		if (err) return res.status(500).send(err);
	  		return res.json(result);
	  	})
	  })
	});
}
