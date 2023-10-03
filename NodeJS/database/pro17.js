
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

    //update data
    //const sqlQuery = "update students set fname = 'NaNdInI' where fname = 'nandini'";
    const sqlQuery = "update students set fname = 'NANDINI' where id = 1";


    conn.query(sqlQuery, function(error, result, fields){
        if(error){
            throw error;
        }else{
            console.log((result));
        }
    });
});