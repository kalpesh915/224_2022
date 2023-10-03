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
    const sqlQuery = "insert into students (fname, lname, city, email) values ('riya', 'parekh', 'rajkot', 'nandini@gmail.com')";
    conn.query(sqlQuery, function(error, result){
        if(error){
            throw error;
        }else{
            console.log("new record created Successfully");
        }
    });
});