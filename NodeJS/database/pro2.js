const mysql = require("mysql");

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : ""
});

conn.connect(function(error){
    if(error){
        throw error;
    }

    //console.log("Database Server Connected");

    conn.query("create database nandiniNode", function(error, result){
        if(error){
            throw error;
        }else{
            console.log("Database created Successfully");
        }
    });
});