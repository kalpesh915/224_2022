const http = require("http");

http.createServer(function(request, response){
    response.write("<h1>Welcome to world of Node JS</h1>");
    response.end();
}).listen(5000);