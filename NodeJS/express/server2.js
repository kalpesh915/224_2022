const express = require("express")

const expressObj = express(); /// initialize express

expressObj.get("/", function(request, response){
    response.sendFile(__dirname+"/index2.html");
});


    expressObj.get("/process_get", function(request, response){
        response.send("<h1>Received Data is <h1>"+
        "<p> First Name is "+request.query["fname"]+
        "<p> Last Name is "+request.query["lname"]+
        "<p> Password is "+request.query["upass"]+
        "<p> Gender is "+request.query["gender"]+
        "<p> Address is "+request.query["address"]);
});

const server = expressObj.listen(5000, function(){
    const hostname = server.address().address;
    const portNumber = server.address().port;
    console.log("Server run in %s port is %s", hostname, portNumber);
});