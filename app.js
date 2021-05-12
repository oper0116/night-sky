var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

