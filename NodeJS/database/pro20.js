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

    /// delete data
    const sqlQuery = "delete from students where id > 10";


    conn.query(sqlQuery, function(error, result, fields){
        if(error){
            throw error;
        }else{
            console.log((result));
        }
    });
});