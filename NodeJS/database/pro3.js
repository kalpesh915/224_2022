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

    conn.query("create table students (id int auto_increment primary key, fname varchar(20), lname varchar(20), city varchar(20), email varchar(20))", function(error, result){
        if(error){
            throw error;
        }else{
            console.log("Table created Successfully");
        }
    });
});