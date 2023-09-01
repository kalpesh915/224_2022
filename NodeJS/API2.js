const http = require("http");
const data = require("./data");
http.createServer(function(request, response){
    response.writeHead(200, {"content-type":"Application/json"});
    response.write(JSON.stringify(data));
    response.end();
}).listen(5000);