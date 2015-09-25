

var db = require('sqlite3').verbose;
var fs = require('fs');

var file = "EatMeSkipMeDb.db";

var exists = fs.existsSync(file);

var dbb = new sqlite3.Database(file);

dbb.serialize(function()
{



});