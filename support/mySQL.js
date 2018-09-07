var random= require('random-number');
var mysql = require('mysql');



var randomNumberOptions = {
  min:  3000000000,
  max:  5999999999,
  integer: true
};


var create_connection = mysql.createConnection({
  host: "test-lapp-api.getwalk.in",
  user: "fl-user",
  password: "W4ut6EdAQnR",
  port:3306,
  database:"lapptest"
});


function updateDb(randomNumberOptions) {
        var randomMobileNumber=random(randomNumberOptions);
        console.log("random mobile number is:-",randomMobileNumber)
        var sql = `update customer set mobile_number=${randomMobileNumber} where mobile_number=${8095499349}`;
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
          });
    
    };




    module.exports={
        upDate_DB:updateDb,
        con:create_connection,
    }