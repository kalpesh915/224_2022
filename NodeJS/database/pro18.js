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

    
    //const sqlQuery = "select * from students limit 5";
    //const sqlQuery = "select * from students limit 5 offset 5";
    const sqlQuery = "select * from students limit 5, 10";


    conn.query(sqlQuery, function(error, result, fields){
        if(error){
            throw error;
        }else{
            console.log((result));
        }
    });
});