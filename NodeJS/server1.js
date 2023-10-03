const http = require("http");

http.createServer((request, response)=>{
    response.write("Welcome to the world of Server side scripting with node JS");
    response.end();
}).listen(4000);