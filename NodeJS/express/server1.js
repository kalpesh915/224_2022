const express = require("express")

const expressObj = express(); /// initialize express

expressObj.get("/index1", function(request, response){
    response.sendFile(__dirname+"/index1.html");
});


/*
expressObj.get("/process_get", function(request, response){
    response = {
        fname : request.query.fname,
        lname : request.query.lname
    }

    console.log("response is ",response);
    //response.send("Data is "+JSON.stringify(response));
});
*/

expressObj.get("/process_get", function(request, response){
    response.send("Received Data is "+request.query["fname"]+" "+request.query["lname"]);
});

const server = expressObj.listen(5000, function(){
    const hostname = server.address().address;
    const portNumber = server.address().port;
    console.log("Server run in %s port is %s", hostname, portNumber);
});