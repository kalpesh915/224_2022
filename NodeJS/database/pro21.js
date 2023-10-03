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

    /// delete table
    const sqlQuery = "drop table demo";


    conn.query(sqlQuery, function(error, result, fields){
        if(error){
            throw error;
        }else{
            console.log((result));
        }
    });
});