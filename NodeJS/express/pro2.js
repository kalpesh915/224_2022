const express = require("express")

const expressObj = express(); /// initialize express

/*
    expressObj.request_method(route, server function(request, response){
        logic
    })
*/
expressObj.get("/", function(request, response){
    //response.send("<hr>Request App "+request.app);
    //response.send("<hr>Request Base URL "+request.baseUrl);
    //response.send("<hr>Request Body "+request.body);
    //response.send("<hr>Request IP "+request.ip);
    //response.send("<hr>Request Parameters "+request.params);
    response.send("<hr>Request Secure "+request.secure);


});


const server = expressObj.listen(5000, function(){
    const hostname = server.address().address;
    const portNumber = server.address().port;

    console.log("Server run in %s port is %s", hostname, portNumber);
});