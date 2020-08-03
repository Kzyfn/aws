var express = require('express');
const app = express();
var basicAuth = require('basic-auth-connect');
var auth = basicAuth('amazon', 'candidate');

app.set("view engine", "ejs");

// HTTPリクエストを受け取る部分
app.get('/', function (req, res) {
  res.send('AMAZON');
});

app.get('/private', auth, function (req, res) {
  res.send('Private information');
});

// サーバーを起動する部分
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.listen(3000, (err, res) => {
  console.log('server is launched');
});
