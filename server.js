var express = require('express');
var app = express();
var path = require('path');
var router = require('./routes/index');
var api = require('./api/index')
var logger = require('morgan');

var bodyParser = require('body-parser');

app.use(logger('dev'));
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!');
// });

//set view engine
app.set('view engine','jade');
app.set('views',path.join(__dirname,'views'));
// include public folder

app.use(express.static(path.join(__dirname,'public')));

//set router

 app.use('/', router);
app.use('/api', api);
 
 // catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

 
 module.exports = app;