var express = require('express');
var multer = require('multer');
var router = express.Router();
var storage = multer.memoryStorage();
var upload = multer({ storage: storage});

router.post('/upload', upload.single('choose-file'), function (req, res, next) {
  res.json({
    fileSize: req.file.size
  });
});

module.exports = router;