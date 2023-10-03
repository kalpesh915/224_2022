const express = require("express")

const expressObj = express(); /// initialize express

/*
    expressObj.request_method(route, server function(request, response){
        logic
    })
*/
expressObj.get("/", function(request, response){
    //request.accepts("html");
    //request.accepts("text/  html");
    //response.send(request.get('Content-Type'));
    //response.send("Request is : "+request.is('text/html'));  
    response.send("Request is : "+request.param('city'));  
});


const server = expressObj.listen(5000, function(){
    const hostname = server.address().address;
    const portNumber = server.address().port;

    console.log("Server run in %s port is %s", hostname, portNumber);
});