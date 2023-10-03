const mysql = require("mysql");

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "nandininode"
});

conn.connect(function(error){
    if(error){
        throw error;
    }

    //console.log("Database Server Connected");
    const sqlQuery = "select id, fname, lname from students";


    conn.query(sqlQuery, function(error, result, fields){
        if(error){
            throw error;
        }else{
           // console.log(JSON.stringify(result));
           console.log(result[0]);
        }
    });
});