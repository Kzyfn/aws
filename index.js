var express = require('express');

const passport = require('passport');
const passportHttp = require('passport-http');

passport.use(new passportHttp.BasicStrategy(
  function (username, password, done) {
    if (username === 'amazon' && password == 'candidate') {
      return done(null, true);
    } else {
      return done(null, false);
    }
  }
));

const app = express();

app.set("view engine", "ejs");
app.get('/secret',
  passport.authenticate('basic', { session: false, }),
  (req, res) => {
    res.render("index", { content: "Success" });
  });

app.listen(3000, (err, res) => {
  console.log('server is launched');
});

// HTTPリクエストを受け取る部分
app.get('/', function (req, res) {
  res.send('AMAZON');
});


// サーバーを起動する部分
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
