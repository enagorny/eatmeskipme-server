
var connect = require('connect'),
    http = require('http'),
    bodyParser = require('body-parser');

var app = connect();
var JS = JSON.stringify;

app.use(bodyParser.urlencoded());


app.use(function(req, res){
  res.end(JS({'hello': 'eatmeskipme'}));
});


http.createServer(app).listen(3000);
