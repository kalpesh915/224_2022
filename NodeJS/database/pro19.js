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

    /// join tables
    const sqlQuery = "select students.*, attendance.absents, attendance.presents from students join attendance on students.id = attendance.student_id";


    conn.query(sqlQuery, function(error, result, fields){
        if(error){
            throw error;
        }else{
            console.log((result));
        }
    });
});