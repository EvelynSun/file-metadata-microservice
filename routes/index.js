var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var app_url = req.protocol + '://' + req.get('host');
  res.render('index', {
    filetype_api: app_url + '/api/upload'
  });
});

module.exports = router;