var express = require('express');
var app = express();

// HTTPリクエストを受け取る部分
app.get('/', function (req, res) {
  res.send('AMAZON');
});

var basicAuth = require('basic-auth-connect');
var adminApp  = express.Router();

adminApp.use(basicAuth('user', 'passw0rD'));

adminApp.get('/secret', function(req, res) {
    res.render('SUCCESS');
});

app.use('/', adminApp);

// サーバーを起動する部分
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
