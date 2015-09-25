var sqlite3 = require('sqlite3');

var dbb = new sqlite3.Database("EatMeSkipMeDb.db");


dbb.each("select barcode from Barcodes", function(err, row)
{
     console.log(row.barcode);

}); 


dbb.each("select * from Intolerances", function(err, row)
{
    console.log(row);
});


