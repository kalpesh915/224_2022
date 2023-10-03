const http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {"content-type":"Application/json"});
    response.write(JSON.stringify({"roll":123, "fname":"Ramesh"}));
    response.end();
}
    ).listen(4000);