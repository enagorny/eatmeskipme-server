
var connect = require('connect'),
    http = require('http'),
    bodyParser = require('body-parser');

var app = connect();
var JS = JSON.stringify;

app.use(bodyParser.urlencoded());


app.use('/intolerances/', function(req, res){
    // request them from db and return as list
    res.end(JS({'intolerances': ['coke', 'weed']}));
});


http.createServer(app).listen(3000);
