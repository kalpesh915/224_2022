const express = require("express")

const expressObj = express(); /// initialize express

/*
    expressObj.request_method(route, server function(request, response){
        logic
    })
*/
expressObj.get("/", function(request, response){
    response.send("Hello, Nandini Welcome to world of Express JS");
});

expressObj.get("/about", function(request, response){
    response.send("this contains related to about us page");
});

expressObj.get("/contact", function(request, response){
    response.send("Hello, this content for contact us page");
});

const server = expressObj.listen(5000, function(){
    const hostname = server.address().address;
    const portNumber = server.address().port;

    console.log("Server run in %s port is %s", hostname, portNumber);
});