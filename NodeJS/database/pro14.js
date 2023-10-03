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

    //const sqlQuery = "select id, fname, lname from students where id >= 10";
    const sqlQuery = "select id, fname, lname from students where fname = ?";
    /// anycharactr i anycharactr


    conn.query(sqlQuery, ["nandini"], function(error, result, fields){
        if(error){
            throw error;
        }else{
            console.log((result));
        }
    });
});