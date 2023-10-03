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
    const sqlQuery = "insert into students (fname, lname, city, email) values ?";

    const values = [
        ['riya', 'parekh', 'rajkot', 'nandini@gmail.com'],
        ['falak', 'parekh', 'rajkot', 'nandini@gmail.com'],
        ['nandini', 'parekh', 'rajkot', 'nandini@gmail.com'],
        ['sohil', 'parekh', 'rajkot', 'nandini@gmail.com']
    ];

    conn.query(sqlQuery, [values], function(error, result){
        if(error){
            throw error;
        }else{
            //console.log("new "+result.affectedRows+" record created Successfully");
            //console.log(result);
            console.log(JSON.stringify(result));
        }
    });
});