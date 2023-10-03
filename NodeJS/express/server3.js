const bodyParser = require("body-parser");
const express = require("express")

const expressObj = express(); /// initialize express

let urlparser = bodyParser.urlencoded({extended : false});

expressObj.get("/", function(request, response){
    response.sendFile(__dirname+"/index3.html");
});


expressObj.post("/process_post", urlparser, function(request, response){
    responseData = {
        fname : request.body.fname,
        lname : request.body.lname,
        password : request.body.upass,
        gender : request.body.gender,
        address : request.body.address,
    }
    console.log(responseData);
    response.send(JSON.stringify(responseData));
});

const server = expressObj.listen(5000, function(){
    const hostname = server.address().address;
    const portNumber = server.address().port;
    console.log("Server run in %s port is %s", hostname, portNumber);
});